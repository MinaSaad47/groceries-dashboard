import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }: { item: any }) => {
  const navigate = useNavigate();

  console.log(item);

  return (
    <div
      className="card btn btn-secondary p-0"
      onClick={() => navigate(`/items/${item.id}`)}>
      <h5 className="card-title mt-2 text-center">{item.name}</h5>
      <img
        src={item.thumbnail ?? "https://via.placeholder.com/500"}
        className="card-img-top"
        style={{ maxHeight: "200px" }}
        alt="item image"
      />
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <div
            className={`card-text ${
              item.offerPrice > 0
                ? "text-decoration-line-through text-secondary"
                : ""
            }`}>
            {item.price} EG
          </div>
          {item.offerPrice > 0 && (
            <div className="card-text">{item.offerPrice} EG</div>
          )}
        </div>
        <div>
          <div className="card-text d-flex gap-2">
            <div>{item.qty}</div>
            <div className="text-secondary">In Stock</div>
          </div>
          <div className="card-text d-flex gap-2 justify-content-center">
            <div>{item.qtyType}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
