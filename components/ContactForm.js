var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <label>Imię:<input type="text" placeholder="imię" value={this.props.contact.firstName} /></label>
        <label>Nazwisko:<input type="text" placeholder="nazwisko" value={this.props.contact.lastName}></input></label>
        <label>Email:<input type="email" placeholder="email" value={this.props.contact.email}></input></label>
        <button type="submit">Add a contact</button>
      </form>
      )
  },
})