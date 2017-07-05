<template>
<div class="GSTDetails">
  <div class="details box" id="mainpage">

    <!-- Header -->
    <div class="job-header job-section">
      <div class="heading-main">
        <p class="title is-3 job-title">BGR Shipping Services</p>
        <p class="subtitle is-6 company-details">CARGO HANDLING & SHIPPING AGENT

        </p>
      </div>
      <div class="header-action is-pulled-right">
        <div class="apply-box">
          <!-- re-open and externally allowed -->
          <a class="button is-success">Confirm</a>
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
              <div class="column">
                <br>
                <label class="label">Invoice Number</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="invno" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>
              <div class="column">
                <br>
                <label class="label">Invoice Date</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="invdate" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>

            </div>

            <div class="columns">
              <div class="column">
                <br>
                <label class="label">GST Number</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="gstin" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>
              <div class="column">
                <br>
                <label class="label">State</label>
                <p class="control">
                  <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="state" placeholder="Invoice Number" type="text" class="input">
                </p>

              </div>

            </div>

          </footer>

          <div>
          </div>
        </div>


        <div class="column" id="editinv">
          <EditInvoiceDetails></EditInvoiceDetails>
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
              <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="cname" placeholder="Client Name" type="text" class="input">
            </p>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Client Address</label>
              <p class="control">
                <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="caddress" placeholder="Client Address" type="text" class="input">
              </p>
            </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column">
          <div class="field">
            <label class="label">GST Number</label>
            <p class="control">
              <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="gstin" placeholder="GST Number" type="text" class="input">
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
              <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="State" placeholder="State" type="text" class="input">
            </p>
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column">
          <div class="field">
            <label class="label">Description</label>
            <p class="control">
              <input v-validate="'required'" id="disabled" :disabled="validated == 1 ? true : false" name="description" placeholder="Description" type="text" class="input">
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
          <EditClientDetails></EditClientDetails>
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

        <DetailsPanel></DetailsPanel>

      </div>
<hr>
      <div class="tile is-ancestor" id="tile">
        <div class="tile is-vertical is-8" id="bank">

          <BankAccountTab></BankAccountTab>

        </div>
        <div class="tile is-parent box">
          <article class="tile is-child notification">
            <div class="content">

              <div class="field">
                <label class="label">CGST</label>
                <p class="control">
                  <input v-validate="'required'" name="cgst" placeholder="CGST." type="text" class="input">
                </p>
                <div v-show="errors.has('cgst')" class="help is-danger">
                  {{ errors.first('cgst') }}
                </div>
              </div>

              <div class="field">
                <label class="label">SGST</label>
                <p class="control">
                  <input v-validate="'required'" name="sgst" placeholder="SGST" type="text" class="input">
                </p>
                <div v-show="errors.has('sgst')" class="help is-danger">
                  {{ errors.first('sgst') }}
                </div>
              </div>

              <div class="field">
                <label class="label">IGST</label>
                <p class="control">
                  <input v-validate="'required'" name="igst" placeholder="IGST" type="text" class="input">
                </p>
                <div v-show="errors.has('igst')" class="help is-danger">
                  {{ errors.first('igst') }}
                </div>
              </div>
              <hr>
              <div class="field">
                <!-- <label class="label">Total GST</label> -->
                <p class="control">
                  <input v-validate="'required'" name="total_gst" placeholder="Total GST" type="text" class="input">
                </p>

                <a class="button is-info">Save</a>

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
export default {
  name: 'GSTDetails',
  data () {
    return {
      inv_no: '',
      inv_date: '',
      gstin: '',
      state: '',
      validated: 1
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

#editinv{
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

#mainpage{
  background-color: #fbf9f9
}

#tile {
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

#bank {
  padding-right: 1rem;
}

#first {
  margin-top: 2px;
}
</style>
