const ServiceList = ({ service }) => {
    return ( 
        <div className="serviceList">
            <h4><strong>Title: </strong>{service.title}</h4>
            <p><strong>Description: </strong>{service.main_description}</p>
            <p><strong>Price: </strong>{service.price} Tk</p>
            <p><strong>Created at: </strong>{service.createdAt} </p>
        </div>
     );
}
 
export default ServiceList;