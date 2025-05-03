import './TemplateExpressionEx.css'

const TemplateExpressionEx = () => {

  const userData = {
    name: 'Gabriel',
    age: 25,
    job: 'Programmer'
  }

  const curlyBraces = '{}';

  return (
    <div className="container">
      <div className="explanation-block">
        <h1>Template Expressions</h1>
        <p>Template Expressions is a way to put javascript snippet code into JSX block, in a simple way, just including the snippet code between {curlyBraces}</p>
      </div>

      <div className="example-block">
        <span>
          <p>Hi, i am {userData.name}</p>
          <p>I am {userData.age}</p>
          <p>And i work as a {userData.job}</p>
        </span>
      </div>
    </div>
  )
};

export default TemplateExpressionEx;