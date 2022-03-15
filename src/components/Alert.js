//npm install react-bootstrap bootstrap@5.1.3

export default function Alert(props) {

    return (
        <div style={{height: '50px'}}>
            {
              props.alert && <div className={`alert alert-${props.alert.type} alert-dismissable fade show`} role='alert'>
                  <strong>{props.alert.msg}</strong>
              </div>
            }
        </div>
    );
  }
  