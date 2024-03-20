import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/bookings/');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const editing = { allowDeleting: true, allowEditing: true };

  const createNewBooking = async () => {
    try {
      // Implement logic to create a new booking
    } catch (error) {
      console.error('Error creating new booking:', error);
    }
  };
  
  const updateExistingBooking = async (bookingId) => {
    try {
      // Implement logic to update an existing booking
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const deleteExistingBooking = async (bookingId) => {
    try {
      // Implement logic to delete an existing booking
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Bookings" />
      <GridComponent
        dataSource={bookings}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* Define your columns here */}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>

      <button onClick={createNewBooking}>Create Booking</button>
      <button onClick={() => updateExistingBooking(bookingId)}>Update Booking</button>
      <button onClick={() => deleteExistingBooking(bookingId)}>Delete Booking</button>
    </div>
  );
};

export default Bookings;
