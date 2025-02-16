export default function ComicsCard(props) {
    return (
        <div className="col-2 text-center mb-3">
            <img src={props.comicInfo.thumb} alt={props.comicInfo.title} className="imgComics" />
            <h5 className="mt-2">{props.comicInfo.title}</h5>
        </div>
    );
}
