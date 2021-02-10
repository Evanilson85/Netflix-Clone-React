import "./footer.css";
import logo from "../../assets/logo.svg";
export default () => {
  return (
    <footer>
      <hr />
      <div className="footerContainer">
        <img src={logo} alt="" />

        <div>
          <ul>
            <li>Termos</li>
            <li>Ajuda</li>
            <li>Feedback</li>
            <li>Netflix</li>
          </ul>
        </div>
      </div>

      <h3>Desenvolvido por Evanilson</h3>
    </footer>
  );
};
