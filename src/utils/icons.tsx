import iconLeftArrow from "./arrow.png";
import {HTMLAttributes} from "react";

export function IconTrash() {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="25" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_9_87" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_9_87" width="100" height="100"
                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADHklEQVR4nO3dzUobYRjF8fOkEzdtBRfNolVwHzdtCCHmDkTwBuyurSK9jt5BbSWUQtsr6Ae9ABeZEOOmTbeKWlw32o0h83SjEIKFdvJOctTzAyHvMHnmlT8TMC4GEBERSccmvYG/KRaLU9PT088ArAJYAHB7xJG/3f2bmX3odrv1TqdzNvouw6MMUqvV7idJ8hnAw4wusRtF0fL29vZxRvNTy016A8OKxeJUxjEA4FG/3/9UKpXyGV4jFbog5x9TWcYAALh7KZ/PP8n6Ov8rmvQGLrE6tP4CYK3RaPwcZWilUpk1sy0zW7o4ZmaPAbwaZW5odHcIgOLgIkmS9VFjAECz2Tzq9/vrQ4cXRp0bGmOQO4OLZrN5FGpwq9U6HDp0N9TsUBiD3GgKQkZByKT+w7BWqy0lSfISwHzA/VwH++6+Ecfx1zRvTn2HuPtrKMZl5s2snvbN+sgikzpIkiRrAPYC7uW62AOQ+huAYF8uVqtVH1w3Gg3KLy5Dyer31UcWGQUhoyBkFISMgpBREDIKQkZByCgIGbr/qS8uLq64ex2Au/vTOI4/TvL8caO7Q9x9E8A9AAUz25z0+eNGFwTA/YHXDwjOHyvGIDeagpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFIQMY5D9gdf/8jiMrM8fK7og7r4B4Oj8Z2PS54+bnh+Skp4fckMoCBkFIaMgZBSEjIKQURAyIYOcDC4qlcpswNlUyuXy3NChk0tPTCFkkB+DCzPbuo5RyuXyXBRFW0OHv4eaH/L5Ie8BVC4WZrZkZofVajXgJTi5+7tQs4LdId1utw5gN9S8K6TV6/XehBoWLEin0zmLomjZzNqhZl4BO1EUrbTb7V6ogbdCDQKAg4OD00Kh8DaXyx2b2QyAGQBTIa9B4BTAjru/6PV6z+M4/jXpDYmIiADAH5sq34HRT4luAAAAAElFTkSuQmCC"/>
            </defs>
        </svg>
    )
}

export function IconRightArrow() {
    return (
        <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="#fff"/>
        </svg>
    )
}

export function IconLeftArrow({className}: HTMLAttributes<HTMLImageElement>) {
    return (
        <img src={iconLeftArrow} alt="icon-left-arrow" className={className}/>
    )
}