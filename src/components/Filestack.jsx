import ReactFilestack, { client } from "filestack-react";
import React from "react";

export default class Filestack extends React.Component {
  constructor(props) {
    super(props);
    this.onUpload = this.onUpload.bind(this);
    this.state = {
      imgUrl: null
    };
  }

  onUpload(result) {
    this.setState({ uploadedfiles: result.filesUploaded });
    const imageUrl = result.filesUploaded[0].url;
    console.log(result.filesUploaded[0].url);

    //this will take the image url(from the upload response) and set it to the state
    this.setState({
      imageUrl: imageUrl
    });
  }

  renderPicker() {
    const apikey = "AFADgP4mQICNxkczq4zSpz";
    //  filestackDb = filestack.init(apikey);
    const ratio = 1 / 1;

    client.pick({
      transformations: {
        crop: {
          aspectRatio: ratio,
          force: true,
          circle: true
        }
      }
    });
  }

  render() {
    const options = {
      accept: "link(url)",
      accept: ["image/*", ".pdf", "video/mp4"],
      maxSize: 10024 * 10024,
      maxFiles: 3
    };

    return (
      <div>
        {this.state.imageUrl && (
          <img
            style={{ height: "30vw", width: "30vw" }}
            src={this.state.imageUrl}
          />
        )}
        <ReactFilestack
          apikey={"AFADgP4mQICNxkczq4zSpz"}
          buttonText="Add Photo"
          buttonClass="classname"
          options={options}
          onSuccess={this.onUpload}
          render={({ onPick }) => (
            <div>
              <button id="filestack" onClick={onPick}>
                Add Photo
              </button>
            </div>
          )}
        />
      </div>
    );
  }
}
