import React, {Component} from 'react'
import vimeo from "vimeo";
class Video extends Component {

  componentDidMount() {

  let VIMEO = vimeo.Vimeo;
  let client = new VIMEO("077fa630664b7373dde9b118df4a0fa01e4bb730", "g3uUuduAOOVfNFP9FAPdgkAMqvdDtkLM+kYjChX3qfSDkvVoBeC1jsvnLwALXV8e2QkWBopkTz1YyIy/hu95SQgjBe5agMhbBgw5oRvlJQSYCsfzS5D3Tk3mtYscikhV", "https://api.vimeo.com/oauth/access_token");

  client.request(/*options*/{
  // This is the path for the videos contained within the staff picks
  // channels
  path: '/channels/staffpicks/videos',
  // This adds the parameters to request page two, and 10 items per
  // page
  query: {
    page: 2,
    per_page: 10,
    fields: 'uri,name,description,duration,created_time,modified_time'
  }
}, /*callback*/function (error, body, status_code, headers) {
  if (error) {
    console.log('error');
    console.log(error);
  } else {
    console.log('body');
    console.log(body);
  }
 
  console.log('status code');
  console.log(status_code);
  console.log('headers');
  console.log(headers);
});

  
  }

  render() {

    let { id, handler, mod} = this.props;

    let embed = {};

    switch(handler) {

      case "vimeo":
       embed = {
        src: "https://player.vimeo.com/video/"+id+"?autoplay=0&loop=1&title=0&byline=0&portrait=0&muted=0"
       };
      break;

      case "youtube":
         embed = {
          src: "https://www.youtube.com/embed/"+id+"?autoplay=0&loop=1&controls=1&background=1&mute=0&playsinline=0"
         };
      break;  

      default:
    }




    return (
    <div className={"Video  Video--"+mod}>
      <iframe src={embed.src} frameborder={"0"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>

    );
  }

}

export default Video



