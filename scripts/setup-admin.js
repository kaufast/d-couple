#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://rkcotbfnmzoichinvndv.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrY290YmZubXpvaWNoaW52bmR2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTE0NDIwMCwiZXhwIjoyMDg0NzIwMjAwfQ.56TBZI6HY8wnLyhYknafYM-mTYwH0XsaSNPndY_eCUc';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupAdmin() {
  try {
    console.log('Finding user...');

    // Find the user
    const { data: users, error: findError } = await supabase.auth.admin.listUsers();

    if (findError) {
      console.error('Error finding users:', findError);
      process.exit(1);
    }

    const user = users.users.find(u => u.email === 'dcouple@proton.me');

    if (!user) {
      console.log('User not found. Please sign up first at http://localhost:3000/page-signup');
      process.exit(1);
    }

    console.log('Found user:', user.id, user.email);
    console.log('Email confirmed:', user.email_confirmed_at ? 'Yes' : 'No');

    // Confirm email if not confirmed
    if (!user.email_confirmed_at) {
      console.log('Confirming email...');
      const { error: confirmError } = await supabase.auth.admin.updateUserById(
        user.id,
        { email_confirm: true }
      );

      if (confirmError) {
        console.error('Error confirming email:', confirmError);
      } else {
        console.log('✓ Email confirmed');
      }
    }

    // Create/update user profile
    console.log('Setting up admin profile...');
    const { error: profileError } = await supabase
      .from('user_profiles')
      .upsert({
        id: user.id,
        role: 'admin',
        display_name: 'Admin User'
      });

    if (profileError) {
      console.error('Error creating profile:', profileError);
      process.exit(1);
    }

    console.log('✓ Admin profile created');
    console.log('\n✅ SUCCESS! You can now login at http://localhost:3000/page-login');
    console.log('   Email:', user.email);
    console.log('   Role: admin');

  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
}

setupAdmin();
