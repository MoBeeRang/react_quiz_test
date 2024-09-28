function Quiz03(props) { 
    const {name, age, phone, children } = props
    return (
        <div>
            <h2>학생정보</h2>
            <ul>
                <li>이름: { props.name}</li>
                <li>나이: { props.age}</li>
                <li>핸드폰 번호: { props.phone}</li>
                <li>학과: { props.children}</li>
            </ul>
        </div>
    )
}
Quiz03.defaultProps = { 
age : 21

}
export default Quiz03