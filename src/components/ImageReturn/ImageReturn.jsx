import CatComponent from "../Cat/CatComponents";

export const ImageReturn = ({ images, loading }) => {
  if (images.length > 0) {
    if (!loading) {
      return images.map((item) => {
        return (
          <div className="grid-cat-container">
            <div className="innerGridCat">
              <img src={item.url} />
            </div>

            <CatComponent item={item} />
          </div>
        );
      });
    }
  }
};
