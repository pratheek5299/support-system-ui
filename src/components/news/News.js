function News(){
    const placeholderStyles = {
        backgroundImage: 'linear-gradient(to right bottom, #233c68, #0851de, #8bc3f9)',
        height: '100%',
        color: 'white',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={placeholderStyles}>
            <h1>News Component</h1>
        </div>
    )
}
export default News;