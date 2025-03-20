import { getImagesByTypeForGallary } from "../lib/utilities"; // Adjust the import path

const ImageGallery = () => {
  const type = "paitings";
  const images = getImagesByTypeForGallary(type);
  console.log("images", images);

  return (
    <div>
      <div className="flex flex-wrap justify-between ml-15 mr-15">
        {images.map((paintingObj) => {
          console.log("image", paintingObj);
          return (
            <div
              key={paintingObj.uniqueName}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 cursor-pointer"
            >
              <div className="mb-5">
                <img
                  src={paintingObj.url}
                  alt={paintingObj.uniqueName}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold">
                  {paintingObj?.name ?? "Paintings"}
                </p>
                <div className="text-sm">{paintingObj?.dimentions ?? ""}</div>
                <div className="text-sm">
                  {paintingObj?.currency ?? ""} {paintingObj?.prize ?? ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
