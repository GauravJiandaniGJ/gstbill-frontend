<template>
<div class="GSTDetails">
  <div class="details box" id="mainpage">

    <!-- Header -->
    <div class="job-header job-section">
      <div class="heading-main">
        <p class="title is-3 job-title">{{company_name}}</p>
        <p class="subtitle is-6 company-details">

        </p>
      </div>
      <div class="header-action is-pulled-right">
        <div class="apply-box">
          <!-- re-open and externally allowed -->
          <a class="button is-success" @click="calculate_confirm()" v-if="this.mainBill.status!='final'">Confirm</a>
          <a class="button is-success" @click="printBill()" v-if="this.mainBill.status=='final'">Print</a>
        </div>
      </div>
    </div>

    <!-- Job Description -->
    <div class="columns is-multiline">

      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title"> Bill Details </p>
            <div class="header-action is-pulled-right edit-btn">
            </div>
          </header>

          <footer class="stripe-footer">
            <div class="columns">
              <div class="column is-left">
                <br>
                <label class="label">Invoice Number</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" v-model="invoice.inv_no" name="invno" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>
              <div class="column is-right">
                <br>
                <label class="label">Invoice Date</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="invdate" v-model="invoice.inv_date" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>

            </div>

            <div class="columns">
              <div class="column is-left" id="left">
                <br>
                <label class="label">GST Number</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="gstin" v-model="invoice.gstin" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>
              <div class="column is-right">
                <br>
                <label class="label">State</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="state" v-model="invoice.state" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>

            </div>

          </footer>

          <div>
          </div>
          <hr>
        </div>

      </div>

    </div>

    <!-- Eligibility Criteria -->

    <div class="hiring-process job-section">
      <b class="section-header">Details of Reciever | Billed to:
      </b>
      <div class="box">
        <div class="columns is-multiline">
          <div class="column">
            <div class="field">
              <label class="label">Client Name</label>
              <p class="control">
                <input v-validate="'required'" id="disabled" v-model="client.cname" :disabled="validated == 1 ? true : false" name="cname" placeholder="Client Name" type="text" class="input">
              </p>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Client Address</label>
              <p class="control">
                <input v-validate="'required'" id="disabled" v-model="client.caddress" :disabled="validated == 1 ? true : false" name="caddress" placeholder="Client Address" type="text" class="input">
              </p>
            </div>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column">
            <div class="field">
              <label class="label">GST Number</label>
              <p class="control">
                <input v-validate="'required'" id="disabled" v-model="client.cgst" :disabled="validated == 1 ? true : false" name="gstin" placeholder="GST Number" type="text" class="input">
              </p>
              <div v-show="errors.has('gstin')" class="help is-danger">
                {{ errors.first('gstin') }}
              </div>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">State</label>
              <p class="control">
                <input v-validate="'required'" id="disabled" v-model="client.cstate" :disabled="validated == 1 ? true : false" name="State" placeholder="State" type="text" class="input">
              </p>
            </div>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column">
            <div class="field">
              <label class="label">Description</label>
              <p class="control">
                <input v-validate="'required'" id="disabled" v-model="client.cdescription" :disabled="validated == 1 ? true : false" name="description" placeholder="Description" type="text" class="input">
              </p>
              <div v-show="errors.has('description')" class="help is-danger">
                {{ errors.first('description') }}
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="columns is-multiline">
        <div class="column">
          <EditClientDetails :client="client" :bill="this.bill_id"></EditClientDetails>
        </div>
      </div>

      <hr>
      <div class="hiring-process job-section box">
        <b class="section-header">Add Content:
</b>
        <br>
        <div class="columns is-multiline" id="content">
          <div class="column is-5">
            <div class="fieG;ld">
              <label class="label">Name of Product / Service</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Service code</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Qty</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Rate</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Total</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Action</label>
            </div>
          </div>


        </div>
        <hr>

        <DetailsPanel :billDetails="this.billDetails" :bid="this.bill_id" :cid="this.cid" :client_state="this.client.cstate" :company_state="this.company_state"></DetailsPanel>

      </div>
      <hr>
      <div class="tile is-ancestor" id="tile">
        <div class="tile is-vertical is-8" id="bank">

          <div class="tile box">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification">
                <br>
                <div class="field">
                  <label class="label">Bank Account</label>
                  <p class="control">
                    <input v-validate="'required'" name="account_no" :disabled="validated == 1 ? true : false" v-model="this.banks.account_no=this.bankDetails.account_no" placeholder="Account Number" type="text" class="input">
                  </p>
                  <div v-show="errors.has('baccount')" class="help is-danger">
                    {{ errors.first('baccount') }}
                  </div>
                </div>
                <div class="field">
                  <label class="label">Beneficiary Name</label>
                  <p class="control">
                    <input v-validate="'required'" name="bname" :disabled="validated == 1 ? true : false" v-model="this.banks.beneficiary_name=this.bankDetails.beneficiary_name" placeholder="Beneficiary Name" type="text" class="input">
                  </p>
                  <div v-show="errors.has('bname')" class="help is-danger">
                    {{ errors.first('bname') }}
                  </div>
                </div>

                <div class="field">
                  <label class="label">Branch IFSC</label>
                  <p class="control">
                    <input v-validate="'required'" name="bifsc" :disabled="validated == 1 ? true : false" v-model="this.banks.branch_ifsc=this.bankDetails.branch_ifsc" placeholder="Branch IFSC" type="text" class="input">
                  </p>
                  <div v-show="errors.has('bifsc')" class="help is-danger">
                    {{ errors.first('bifsc') }}
                  </div>
                </div>
                <br>

                <BankAccountTab :bankDetailArray="this.bankDetailsArray" :bill="this.bill_id"></BankAccountTab>

                <div class="field">
                </div>
                <div class="field">
                </div>
                <div class="field">
                </div>
                <div class="field">
                </div>
                <div class="field">
                </div>

              </article>
            </div>

          </div>


        </div>
        <div class="tile is-parent box">
          <article class="tile is-child notification">
            <div class="content">

              <div class="field">
                <label class="label">CGST</label>
                <p class="control">
                  <input id="input" v-validate="'required'" v-model="cgst" name="cgst" placeholder="CGST." type="text" class="input">
                </p>
                <div v-show="errors.has('cgst')" class="help is-danger">
                  {{ errors.first('cgst') }}
                </div>
              </div>

              <div class="field">
                <label class="label">SGST</label>
                <p class="control">
                  <input id="input" v-validate="'required'" v-model="sgst" name="sgst" placeholder="SGST" type="text" class="input">
                </p>
                <div v-show="errors.has('sgst')" class="help is-danger">
                  {{ errors.first('sgst') }}
                </div>
              </div>

              <div class="field">
                <label class="label">IGST</label>
                <p class="control">
                  <input id="input" v-validate="'required'" v-model="igst" name="igst" placeholder="IGST" type="text" class="input">
                </p>
                <div v-show="errors.has('igst')" class="help is-danger">
                  {{ errors.first('igst') }}
                </div>
              </div>
              <hr>
              <div class="field">
                <!-- <label class="label">Total GST</label> -->
                <p class="control">
                  <input id="input" v-validate="'required'" v-model="total_gst" name="total_gst" placeholder="Total GST" type="text" class="input">
                </p>
                <a class="button is-info" v-if="this.mainBill.status=='final'" @click="calculate_confirm()">Re-Confirm</a>
              </div>

              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>


    </div>
  </div>

</div>
</template>

<script>
import StateCombobox from '@/components/StateCombobox'
import ClientNameComboBox from '@/components/ClientNameComboBox'
import DetailsPanel from '@/components/DetailsPanel'
import BankAccountsCombobox from '@/components/BankAccountsCombobox'
import EditInvoiceDetails from '@/components/EditInvoiceDetails'
import ClientAddressCombobox from '@/components/ClientAddressCombobox'
import EditClientDetails from '@/components/EditClientDetails'
import BankAccountTab from '@/components/BankAccountTab'
import HTTP from '@/packages/HTTP'
export default {
  name: 'GSTDetails',
  data () {
    return {
      invoice: {
        inv_no: '',
        inv_date: '',
        gstin: '',
        state: ''
      },
      client: {
        cname: '',
        caddress: '',
        cgst: '',
        cstate: '',
        cdescription: ''
      },
      validated: 1,
      cid: null,
      yid: null,
      mid: null,
      bill_id: null,
      mainBill: Object,
      billDetails: [],
      banks: {
        account_no: '',
        beneficiary_name: '',
        branch_ifsc: ''
      },
      bankDetails: Object,
      bankDetailsArray: [],
      client_id: null,
      print: false,
      company_state: '',
      cgst: 0,
      sgst: 0,
      igst: 0,
      total_gst: 0,
      company_name: '',
      re_confirm: false
    }
  },
  components: {
    StateCombobox,
    ClientNameComboBox,
    DetailsPanel,
    BankAccountsCombobox,
    EditInvoiceDetails,
    ClientAddressCombobox,
    EditClientDetails,
    BankAccountTab
  },
  created () {
    alert('Try to EDIT below details and give PRINT a try')
    this.getToken()
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.bill_id = this.$route.params.bid
    this.getBillDetails(this.bill_id)
    this.$bus.$on('refreshNow', () => {
      this.getBillDetails(this.bill_id)
    })
    this.$bus.$on('totalTax', (response) => {
      this.cgst = response.cgst
      this.sgst = response.sgst
      this.igst = response.igst
      this.total_gst = response.total_gst
    })
  },
  methods: {
    getBillDetails (id) {
      HTTP.get(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/displayAllData/` + id)
        .then(response => {
          this.mainBill = response.data
          this.invoice.inv_no = response.data.bill_no
          this.invoice.inv_date = response.data.bill_date
          this.invoice.gstin = response.data.company.gstin
          this.invoice.state = response.data.company.state
          this.client.cname = response.data.client_address.client.name
          this.client.caddress = response.data.client_address.address
          this.client.cgst = response.data.client_address.gstin
          this.client.cstate = response.data.client_address.state
          this.client.cdescription = response.data.description
          this.billDetails = response.data.bill_details
          this.bankDetails = response.data.bank
          this.bankDetailsArray = response.data.company.bank
          this.client_id = response.data.client_address.client_id
          this.company_state = response.data.company.state
          this.company_name = response.data.company.name
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    calculate_confirm () {
      HTTP.post(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/calculateTotalAmount/` + this.bill_id, {})
        .then(response => {
          if (response.status === 200) {
            this.confirm()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    confirm () {
      HTTP.post(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/confirmBill/` + this.bill_id, {})
        .then(response => {
          if (response.status === 200) {
            this.print = true
            this.getBillDetails(this.bill_id)
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    printBill () {
      HTTP.get(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/printGSTBill/` + this.invoice.inv_no)
        .then(response => {
          if (response.status === 200) {
            window.location.href = 'http://api.gaurav-gst-billing.com/api/company/' + this.cid + '/year/' + this.yid + '/month/' + this.mid + '/bill/printGSTBill/' + this.invoice.inv_no
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return true
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss">
.main-page {
    margin-top: 1rem;
}

.input[disabled] {
    text-align: center;
}

.GSTDetails {

    .details-box {
        border-radius: 4px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        padding: 0;
        background-color: #fafcfd;
    }

    .header-action {
        .tag {
            margin-left: 1rem;
        }
    }

    .re-open {
        border-bottom: solid 1px #ddd;
        padding-bottom: 1rem;
    }

    .apply-box {
        padding: 0.4rem 0.4rem 0.4rem 0;
    }

    .column.is-left {
        padding-left: 2rem;
        padding-bottom: 0;
        padding-top: 0;
    }

    .column.is-right {
        padding-right: 2rem;
        padding-top: 0;
    }

    .job-section {
        border-bottom: solid 1px #ddd;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;

        .section-header {
            display: flex;
            margin-bottom: 1rem;
            padding-left: 1rem;
        }
    }

    .job-header {
        padding: 2.5rem;
        background: #3273dc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 4px 4px 0 0;
        box-shadow: inset 0 -8px 16px rgba(0, 0, 0, 0.2);

        .title {
            margin-bottom: 0;
            color: #fff;
        }

        .subtitle {
            // color: #1d4586;
            color: #fff;
            font-weight: bold;
            margin-top: 0.5rem;
        }
    }

    .job-description {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .eligibility-criteria {
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        .stripe-footer {
            .column {
                padding: 1rem;
                text-align: center;
            }
        }
    }

    .heading-main {
        .job-title {
            padding: 0;
        }
    }

}

#editinv {
    padding-top: 1.5rem;
    padding-bottom: 0.2rem;
}

#edit {
    padding-top: 1rem;
    padding-bottom: 0;
}

#content {
    padding-bottom: 0;
}

#disabled {
    background-color: white;
}

#mainpage {
    background-color: #fbf9f9;
}

#tile {
    padding: 0.8rem;
}

#bank {
    padding-right: 1rem;
}

#first {
    margin-top: 2px;
}

#left {
    margin-bottom: 1.5rem;
}

#input {
  text-align: center;
}
</style>
