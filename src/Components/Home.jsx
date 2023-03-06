import Products from './Products'

const Home = () => {

  return (
    <div>
        <h2 className="heading">Welcome to the Redux Toolkit Store</h2>
        <section>
            {/* <button className='btn' style={{}}>All Products</button> */}
            <Products />
        </section>  
    </div>
  )
}

export default Home