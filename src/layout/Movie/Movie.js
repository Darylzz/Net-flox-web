export default function Movie({ image }) {
    return <div>
        <img src={process.env.REACT_APP_URL + image} alt="" />
    </div>
}