import { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import PropTypes from 'prop-types'

const Alert = () => {
    const alertContext = useContext(AlertContext)

    const { alert } = alertContext

    return alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle"></i> {alert.msg}
        </div>
    )
}

Alert.propTypes = {
    alert: PropTypes.array
}

export default Alert
