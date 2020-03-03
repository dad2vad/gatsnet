import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'



export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target.name + ' ' + e.target.value 
    fetch('/.netlify/functions/http/' + form )
//           , {

//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: ,
//    }
         
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
                 <form
                    action='/.netlify/functions/http'
                    method='post'
                    onSubmit={handleSubmit}
                  >
                    <div className='field'>
                      <label className='label'>Имя</label>
                      <div className='control'>
                        <input
                          className='input'
                          type='text'
                          placeholder='имя'
                          name='name'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Город + данные</label>
                      <div className='control'>
                        <input
                          className='input'
                          type='email'
                          placeholder='почта'
                          name='email'
                          onChange={handleChange}                  
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Ссылка</label>
                      <div className='control'>
                        <input
                          className='input'
                          type='email'
                          placeholder='url'
                          type='url'
                          name='$url'                          
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Тел</label>
                      <div className='control'>
                        <input
                          type='text'
                          className='input'
                          placeholder='phone'
                          name='phone'                          
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Дополнительно</label>
                      <div className='control'>
                        <textarea
                          className='textarea'
                          placeholder='...'
                          name='message'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>          

                    <div className='field is-grouped'>
                      <div className='control'>
                        <button className='button is-primary' type='submit'>
                          ok
                        </button>
                      </div>
                    </div>
                  </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
