import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = props => {
    return (
        <div>
            <div id="layoutSidenav">
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                        <div className="card-body">Primary Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Warning Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-success text-white mb-4">
                                        <div className="card-body">Success Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-danger text-white mb-4">
                                        <div className="card-body">Danger Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">Personnel Management</div>
                                <div className="card-body">
                                    <div className="datatable">
                                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table className="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                                        <thead>
                                                            <tr role="row">
                                                                <th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '119px' }}>Name</th>
                                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '184px' }}>Position</th>
                                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: '83px' }}>Office</th>
                                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '34px' }}>Age</th>
                                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: '76px' }}>Start date</th>
                                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Salary: activate to sort column ascending" style={{ width: '67px' }}>Salary</th>
                                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '49px' }}>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1">Cara Stevens</td>
                                                                <td>Sales Assistant</td>
                                                                <td>New York</td>
                                                                <td>46</td>
                                                                <td>2011/12/06</td>
                                                                <td>$145,600</td>
                                                                <td><div className="badge badge-primary badge-pill">Full-time</div></td>
                                                            </tr>
                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">Cedric Kelly</td>
                                                                <td>Senior Javascript Developer</td>
                                                                <td>Edinburgh</td>
                                                                <td>22</td>
                                                                <td>2012/03/29</td>
                                                                <td>$433,060</td>
                                                                <td><div className="badge badge-info badge-pill">Contract</div></td>
                                                            </tr>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1">Cara Stevens</td>
                                                                <td>Sales Assistant</td>
                                                                <td>New York</td>
                                                                <td>46</td>
                                                                <td>2011/12/06</td>
                                                                <td>$145,600</td>
                                                                <td><div className="badge badge-primary badge-pill">Full-time</div></td>
                                                            </tr>
                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">Cedric Kelly</td>
                                                                <td>Senior Javascript Developer</td>
                                                                <td>Edinburgh</td>
                                                                <td>22</td>
                                                                <td>2012/03/29</td>
                                                                <td>$433,060</td>
                                                                <td><div className="badge badge-info badge-pill">Contract</div></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center justify-content-between small">
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
