const OffsetWrapper = ({ children, ...rest }) => {

    // const this= useRef(null)
    // const {scrolledFromTop} = useScrollValue()
    // useEffect(()=>{
    // this.distance from nav >= scrolledFromtop?setNaveActive(true): setNAvActive(false)

    // },
    // [scrolledFromTop])
  return <section {...rest} ref={this}  >{children}</section>;
};
export default OffsetWrapper