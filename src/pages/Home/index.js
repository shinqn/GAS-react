function Home() {
    const clickButton = () => {
        console.log(document.URL);
    };
    return (
        <>
            <h2>Home page</h2>
            <button onClick={clickButton}>Click</button>
        </>
    );
}

export default Home;
