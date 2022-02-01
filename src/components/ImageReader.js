import { useRef } from "react";

const ImageReader = (props) => {
  const fileElement = useRef();
  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = fileElement.current.files[0];
    if (selectedFile) {
      fileReader.addEventListener("load", getImage);
      fileReader.readAsDataURL(selectedFile);
    }
  };
  const getImage = () => {
    props.handleImage(fileReader.result);
  };

  return (
    <div>
      <label
        className="fill__button js__profile-trigger"
        htmlFor="img-selector"
        type="button"
      >
        Añadir imagen
      </label>
      <input
        ref={fileElement}
        type="file"
        name="img-selector"
        onChange={handleFile}
        className="hidden"
        required
        id="img-selector"
      />{" "}
    </div>
  );
};

export default ImageReader;
