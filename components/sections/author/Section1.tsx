import Image from "next/image";

export default function Section1() {
    return (
        <div className="container pt-4 pb-4">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-3">
                        <div className="size-100 rounded-circle overflow-hidden">
                            <Image src="/assets/imgs/template/author/author-13.webp" alt="d-couple" className="cover-image" width={100} height={100} />
                        </div>
                        <h1 className="my-1 h3">Thomas Foks</h1>
                        <p className="fs-6 mb-2">
                            Crafting engaging, authentic stories that inspire <br />
                            and connect with audiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
