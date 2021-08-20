import { useParams } from "react-router-dom";
import "../css/preview.css";
let Preview = () => {
  let { id } = useParams();
  return (
    <div className="preview-container">
      <div className="preview-img-container">
        <img src="http://localhost:3000/phone.jpeg" />
      </div>

      <div className="preview-listing">
        <h2>Smart phone title</h2>
        <p className="listing-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          qui placeat esse, quo animi nemo cum, voluptatibus ipsum nesciunt
          molestiae consectetur aspernatur commodi libero ullam sit maiores sunt
          nostrum ea. Hic, culpa amet ex nesciunt quasi ullam dolores voluptatum
          ipsam fugit nostrum nihil perferendis quam magni. Vitae sapiente
          suscipit quidem accusantium natus excepturi, delectus voluptas? Quasi,
          ipsum sequi natus corrupti commodi qui facilis veniam tempora eaque,
          ad consectetur suscipit voluptatum officiis! Voluptate, quo recusandae
          ab ipsam saepe perferendis tempora sed dignissimos error expedita
          maiores! Laboriosam nihil non aliquam, nisi reiciendis, voluptates
          officia error necessitatibus fugiat molestias repellat minima.
          Pariatur, aut!
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Preview;
