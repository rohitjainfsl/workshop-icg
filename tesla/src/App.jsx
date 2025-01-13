import Header from "./Header";
import Section from "./Section";
import Model3 from "./assets/images/model-3.jpg";
import ModelS from "./assets/images/model-s.jpg";
import ModelX from "./assets/images/model-x.jpg";
import ModelY from "./assets/images/model-y.jpg";
import SolarPanels from "./assets/images/solar-panel.jpg";
import SolarRoof from "./assets/images/solar-roof.jpg";
import Accessories from "./assets/images/accessories.jpg";

function App() {
  return (
    <>
      <Header />
      <Section
        carName="Model 3"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo={Model3}
        arrow={true}
      />
      <Section
        carName="Model Y"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo={ModelY}
      />
      <Section
        carName="Model S"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo={ModelS}
      />
      <Section
        carName="Model X"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo={ModelX}
      />
      <Section
        carName="Solar Panels"
        tagline="Lower Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
        photo={SolarPanels}
      />
      <Section
        carName="Solar Roof"
        tagline="Lower Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
        photo={SolarRoof}
      />
      <Section
        carName="Accessories"
        leftBtn="Custom Order"
        photo={Accessories}
      />
    </>
  );
}
export default App;
