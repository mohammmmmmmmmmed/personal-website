import { Image, Container } from 'react-bootstrap';
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

const pics = require("./gallery/pics.json")
const cats = require("./gallery/cats.json")




const Album = (props) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="my-5">
                <h2 className='glow' align="center" >{props.title}</h2>
                <hr />
                {props.location && props.year && <p align="center" >{props.location} | {props.year}</p>}
                {props.description && <p align="center" >{props.description}</p>}
                <PhotoAlbum
                    photos={props.photos}
                    layout="rows"
                    targetRowHeight={150}
                    onClick={({ index }) => setIndex(index)}
                    componentsProps={{ imageProps: { "class": "rounded" } }}
                />
                <Lightbox
                    slides={props.photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                />
            </div>
        </>
    )
}

const Random = () => {

    return (
        <>
            <Container>
                <Container>

                    <h1 className='glow'>Random</h1>
                    <div>

                        <p>
                            Because why not?                </p>
                    </div>
                </Container>
                <Container>
                    <Album photos={pics} title="Random pictures" description="" />
                    <Album photos={cats} title="Cats" description="" />


                </Container>
            </Container>
        </>
    )
}

export default Random;