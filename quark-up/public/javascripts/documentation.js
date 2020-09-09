// Documentation file

// Imports

// Imports Modules

// Imports components

// Variables

// Constant
const URL = `https://quarkup.orkneytech.com.br`;
const doc = `<div class="container">                
                <h2>Documentation</h2><br>                
                <p><i class="fas fa-file-alt fa-1x"></i> Enquiry</p>
                <div class="card bg-primary text-white">
                    <div class="card-body">Get users</div>
                </div>
                <div class="card">
                    <div class="card-body">`+ URL +`/queryUsers</div>
                </div>
                <div class="card bg-primary text-white">
                    <div class="card-body">Get user</div>
                </div>
                <div class="card">
                    <div class="card-body">`+ URL +`/queryUser/{id}</div>
                </div><br>
                <p><i class="far fa-plus-square fa-1x"></i> Register</p>
                <div class="card bg-success text-white">
                    <div class="card-body">Post user</div>
                </div>
                <div class="card">
                    <div class="card-body">`+ URL +`/registerUser</div>
                </div><br>
                <p><i class="fas fa-sync-alt fa-1x"></i> Update</p>
                <div class="card bg-warning text-white">
                    <div class="card-body">Put user</div>
                </div>
                <div class="card">
                    <div class="card-body">`+ URL +`/updateUser/{id}</div>
                </div><br>
                <p><i class="far fa-trash-alt fa-1x"></i> Delete</p>
                <div class="card bg-danger text-white">
                    <div class="card-body">Del user</div>
                </div>
                <div class="card">
                    <div class="card-body">`+ URL +`/deleteUser/{id}</div>
                </div>
            </div><br><br>`;

const documentation = { 
    doc: doc
};

// Functions

// Exports
module.exports.documentation = documentation;