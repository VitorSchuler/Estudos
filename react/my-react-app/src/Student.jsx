import PropTypes from 'prop-types';


function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age:0,
    isStudent: false,
}
export default Student

//      <Student name="Spongebob" age={30} isStudent={true}/>
//      <Student name="Patrick" age ={42} isStudent={false}/>
//      <Student name="Squidward" age ={50} isStudent={false}/>
//      <Student name="Sandy" age ={27} isStudent={true}/>
