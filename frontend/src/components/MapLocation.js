import React from "react"
import { compose, withProps } from "recompose"
import { 
    withScriptjs, 
    withGoogleMap, 
    GoogleMap, 
    Marker,
    Circle,
} from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
    )((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 33.788040, lng: -118.186684}}
    >
        {props.isMarkerShown && <Marker position={{ lat: 33.788040, lng: -118.186684 }} onClick={props.onMarkerClick} />}
        <Marker position={{ lat: 33.737930, lng: -118.310170 }} options={{ strokeColor: 'blue' }} onClick={props.onMarkerClick} />
        <Marker position={{ lat: 33.826000, lng: -118.189613 }} options={{ strokeColor: 'blue' }} onClick={props.onMarkerClick} />
        <Circle 
            defaultCenter={{ lat: 33.788040, lng: -118.186684}}
            radius={props.circleRadius}
            options={{
                strokeColor: '#F16A54'
            }}
        />
    </GoogleMap>
)

export default class MapLocation extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        circleRadius={this.props.circleRadius}
      />
    )
  }
}