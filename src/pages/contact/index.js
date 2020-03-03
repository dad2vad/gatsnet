import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }
    }
  
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    

    const USER_ID =  "iwnyTCYmL3dNSCDDJmvA0A=="  
    var txt = 'JSON.stringify(upd,null,4)'  
    var senderName = 'КАЖУ Ш'
    var data = {
      'type' : 'text',
      'text' : txt,
      'receiver': USER_ID,
      'sender': {
        'name': senderName
      }
    fetch('/', {
      method: 'POST',
      headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Viber-Auth-Token': '4ae0995b6f67d10d-dd36b04c65262134-adf72625e8e168aa',
                'cache-control': 'no-cache' 
      },
    uri: 'https://chatapi.viber.com/pa/send_message',
    body: JSON.stringify(data),
    method: 'POST'
  })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

   handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>

                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
