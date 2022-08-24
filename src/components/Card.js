import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const locationDot = <FontAwesomeIcon className="card--icon" icon={faLocationDot} />

export default function Card(props) {

    // Deconstructs props to get all necessary properties 
    const { title, imageUrl, location, googleMapsUrl, startDate, endDate, description } = props;

    // Returns <Card /> component with title, image, description and some information on each destination in the travel blog
    return (
        <div className="card">
            <div className="card--img">
                <img alt={title} src={imageUrl} />
            </div>
            <div className="card--info">
                <div className="location">
                    {locationDot}
                    <span className="location--city">{location.toUpperCase()}</span>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card--title">
                    <h2>{title}</h2>
                </div>
                <p className="card--dates">{startDate} - {endDate}</p>
                <div className="card--description">
                    {description}
                </div>
            </div>
        </div>
    )
}