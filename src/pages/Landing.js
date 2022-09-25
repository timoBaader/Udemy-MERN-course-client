import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby +1 iceland shabby chic small batch dreamcatcher copper mug
            austin neutra jianbing gastropub bicycle rights wolf bespoke 3 wolf
            moon. Viral roof party tote bag beard bodega boys williamsburg
            readymade fit ascot actually fanny pack 3 wolf moon chartreuse
            ramps. Farm-to-table hella lomo same, tbh mumblecore godard pug
            whatever VHS af. Letterpress truffaut umami unicorn etsy ethical
            schlitz pinterest praxis brunch. Godard yes plz gatekeep,
            microdosing chia beard poutine vinyl.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
