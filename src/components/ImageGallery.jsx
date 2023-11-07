import { useEffect, useState } from "react";

const ImageGallery = ({ list }) => {
    const [currentImage, setCurrentImage] = useState("");
    useEffect(() => {
        setCurrentImage(list[0])
    }, [])
    return (
        <div className="w-full px-6 py-3 bor der-2 bord er-green-600 rounded-md">
            <div className="w-full h-[200px] md:h-[400px] ">
                <img className="max-h-full mx-auto cursor-pointer" src={currentImage} alt={"Web Pic"} />
            </div >
            <div className="overflow-x-auto flex justify-center my-6 p-2">
                {
                    list.map((img, i) => <span
                        key={i}
                        className={`w-[100px] aspect-video mx-3 ring-4 ${img === currentImage ? " ring-green-500" : ""}`}
                        onClick={() => setCurrentImage(img)}>
                        <img className="object-cover cursor-pointer" src={img} alt="Gallery pic" />
                    </span>)
                }
            </div>
        </div>
    )
}

export default ImageGallery