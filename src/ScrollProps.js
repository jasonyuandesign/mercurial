class ScrollProps extends Component {


constructor(props) {
    super(props)
    this.state = {
        showing: window.pageYOffset <100
    }
    this.handleScroll = this.handleScroll.bind(this)
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    var scrollTop = window.pageYOffset
    if (scrollTop < 100) {
        this.setState({ showing: false});
    } else {
        this.setState({ showing: true});
    }
}

handleScroll(event) {
    var scrollTop = window.pageYOffset
    if (scrollTop < 100) {
        this.setState({ showing: false});
    } else {
        this.setState({ showing: true});
    }
}}

export default ScrollProps;


