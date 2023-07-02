import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      {/* Header.js */}
      {/* <div w3-include-header="header.html">
        <header data-role="header">
          <h1>Header.html</h1>
        </header>
      </div> */}
      <Header></Header>
      <section id="page1" data-role="page">
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>
      {/* Footer.js */}
      {/* <div w3-include-footer="footer.html">
        <footer data-role="footer">
          <h1>Footer.html</h1>
        </footer>
      </div> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
