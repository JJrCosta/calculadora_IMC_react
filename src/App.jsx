import Header from "./components/Header"
import Content from "./components/Content"
import Calculator from "./components/Calculator"
import InfoTable from "./components/InfoTable"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Content />
        <Calculator/>
        <InfoTable />
      </main>
      <Footer />
    </>
  )
}

export default App
