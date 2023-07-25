import React from "react";
import Products from "./components/Products";
import Policies from "./components/Policies";
import Licenses from "./components/Licenses";
import Machines from "./components/Machines";

function App() {
  const [view, setView] = React.useState('Products');

  return (
    <React.Fragment>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="products-tab" data-toggle="tab" href="#products" role="tab" aria-controls="products" aria-selected="true" onClick={() => setView('Products')}>Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="policies-tab" data-toggle="tab" href="#policies" role="tab" aria-controls="policies" aria-selected="false" onClick={() => setView("Policies")}>Policies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="licenses-tab" data-toggle="tab" href="#licenses" role="tab" aria-controls="licenses" aria-selected="false" onClick={() => setView("Licenses")}>Licenses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="machines-tab" data-toggle="tab" href="#machines" role="tab" aria-controls="machines" aria-selected="false" onClick={() => setView("Machines")}>Machines</a>
        </li>
      </ul>
      {view === 'Products' && <Products />}
      {view === 'Policies' && <Policies />}
      {view === 'Licenses' && <Licenses />}
      {view === 'Machines' && <Machines />}
    </React.Fragment>
  );
}

export default App;
