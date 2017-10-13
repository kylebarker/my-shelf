import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { editAlbum, getAlbum } from '../../actions/artists'

class OptimizeForm extends Component {

  componentDidMount() {
    this.props.getAlbum(this.props.id);
  }

  editAlbum = (id) => {
    this.props.editAlbum(this.props.id);
  }

  render () {
    if(this.props.artists){
      let albumInfo = this.props.artists
      console.log("THIS THIS THIS",this)

      console.log("OPTIMIZE FORM PROPS",this.props)
      return (
        <div>
          <h1>OPTIMIZE ALBUM</h1>
          <form onSubmit={ this.props.handleSubmit(this.editAlbum) }>
            <div>
              <label htmlFor="artist">Artist</label>
              <Field className="form-control" name="artist" component="input" type="text"/>
            </div>
            <br/>
            <div>
              <label htmlFor="album">Album</label>
              <Field className="form-control" name="album" component="input" type="text" />
            </div>
            <br/>
            <div>
              <label htmlFor="year">Year</label>
              <Field className="form-control" name="year" component="input" type="text"/>
            </div>
            <br/>
            <div>
              <label htmlFor="genre">Genre</label>
              <Field className="form-control" name="genre" component="input" type="text"/>
            </div>
            <br/>
            <div>
              <label htmlFor="image_url">image_url</label>
              <Field className="form-control" name="image_url" component="input" type="text"/>
            </div>
            <br/>
            <div>
              <label htmlFor="label">Label</label>
              <Field className="form-control" name="label" component="input" type="text"/>
            </div>
            <br/>
            <div>
              <label htmlFor="cat_num">Catalog Number</label>
              <Field className="form-control" name="cat_num" component="input" type="text"/>
            </div>
            <br/>
            <div>
              <label htmlFor="print_year">Print Year</label>
              <Field className="form-control" name="print_year" component="input" type="text"/>
            </div>
            <br/>
            <div>
              <label htmlFor="color">Color</label>
              <Field className="form-control" name="color" component="input" type="text"/>
            </div>
            <br/>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      )

    } else {
      return null
    }
  }
}

OptimizeForm = reduxForm({
  form: 'optimizeForm'
})(OptimizeForm)

function mapStateToProps(state, props) {
  let dig = state.artists[state.artists.length-1]
  console.log("MAPPING",dig)
  if(dig){
    return {
      artists: state.artists,
      initialValues: {
        artist: dig.artist,
        album: dig.album,
        year: dig.year,
        genre: dig.genre,
        image_url: dig.image_url,
        label: dig.label,
        cat_num: dig.cat_num,
        print_year: dig.print_year,
        color: dig.color
      }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editAlbum: bindActionCreators(editAlbum, dispatch),
    getAlbum: bindActionCreators(getAlbum, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (OptimizeForm);
