<template>
<div class="Details">
  <div class="details box">

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
        <div class="field">
          <label class="label">Invoice Number</label>
          <p class="control">
            <input v-validate="'required'" :disabled="validated == 1 ? true : false" name="invno" placeholder="Invoice Number" type="text" class="input">
          </p>
          <div v-show="errors.has('invno')" class="help is-danger">
            {{ errors.first('invno') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Invoice Date</label>
          <p class="control">
            <input v-validate="'required'" :disabled="validated == 1 ? true : false" name="inv_date" placeholder="Invoice Date" type="text" class="input">
          </p>
          <div v-show="errors.has('inv_date')" class="help is-danger">
            {{ errors.first('inv_date') }}
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column">
        <div class="field">
          <label class="label">GST Number</label>
          <p class="control">
            <input v-validate="'required'" :disabled="validated == 1 ? true : false" name="gstin" placeholder="GST Number" type="text" class="input">
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
            <StateCombobox></StateCombobox>
          </p>
          <div v-show="errors.has('state')" class="help is-danger">
            {{ errors.first('state') }}
          </div>
        </div>
      </div>
    </div>


    <div class="columns is-multiline">
      <div class="column" id="edit">
        <div class="field">
          <a class="button is-info">Edit</a>
        </div>
      </div>
    </div>
    <hr>
    <!-- Eligibility Criteria -->

    <div class="hiring-process job-section">
      <b class="section-header">Details of Reciever | Billed to:
      </b>

      <div class="columns is-multiline">
        <div class="column">
          <div class="field">
            <label class="label">Client Name</label>
            <ClientNameComboBox></ClientNameComboBox>
            <div v-show="errors.has('gstin')" class="help is-danger">
              {{ errors.first('gstin') }}
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Client Address</label>
            <p class="control">
              <StateCombobox></StateCombobox>
            </p>
            <div v-show="errors.has('state')" class="help is-danger">
              {{ errors.first('state') }}
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column">
          <div class="field">
            <label class="label">GST Number</label>
            <p class="control">
              <input v-validate="'required'" :disabled="validated == 1 ? true : false" name="gstin" placeholder="GST Number" type="text" class="input">
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
              <StateCombobox></StateCombobox>
            </p>
            <div v-show="errors.has('state')" class="help is-danger">
              {{ errors.first('state') }}
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column">
          <div class="field">
            <label class="label">Description</label>
            <p class="control">
              <input v-validate="'required'" :disabled="validated == 1 ? true : false" name="description" placeholder="Description" type="text" class="input">
            </p>
            <div v-show="errors.has('description')" class="help is-danger">
              {{ errors.first('description') }}
            </div>
          </div>
        </div>
      </div>


      <div class="columns is-multiline">
        <div class="column">
          <div class="field">
            <a class="button is-info">Edit</a>
          </div>
        </div>
      </div>

      <hr>
      <div class="hiring-process job-section box">
        <b class="section-header">Add Content:
</b>
        <br>
        <div class="columns is-multiline" id="content">
          <div class="column is-5">
            <div class="field">
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
        </div>
        <hr>

        <DetailsPanel></DetailsPanel>

      </div>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child ">
<br>
                <div class="field">
                  <label class="label">Bank Account</label>
                  <p class="control">
                    <BankAccountsCombobox></BankAccountsCombobox>
                  </p>
                  <div v-show="errors.has('baccount')" class="help is-danger">
                    {{ errors.first('baccount') }}
                  </div>
                </div>

                <div class="field">
                  <label class="label">Beneficiary Name</label>
                  <p class="control">
                    <input v-validate="'required'" name="bname" placeholder="Beneficiary Name" type="text" class="input">
                  </p>
                  <div v-show="errors.has('bname')" class="help is-danger">
                    {{ errors.first('bname') }}
                  </div>
                </div>

                <div class="field">
                  <label class="label">Branch IFSC</label>
                  <p class="control">
                    <input v-validate="'required'" name="bifsc" placeholder="Branch IFSC" type="text" class="input">
                  </p>
                  <div v-show="errors.has('bifsc')" class="help is-danger">
                    {{ errors.first('bifsc') }}
                  </div>
                </div>
                <br>
                <div class="field">
                  <a class="button is-info">Save</a>
                </div>

              </article>
            </div>

          </div>

        </div>
        <div class="tile is-parent">
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
export default {
  name: 'placement-detail-page',
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
    BankAccountsCombobox
  }
}
</script>

<style lang="scss">
html {
    min-height: 100%;
    background: #fafafa;
}
.main-page {
    margin-top: 1rem;
}

.input[disabled] {
    text-align: center;
}

.Details {

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

#edit {
    padding-bottom: 0;
}

#content {
    padding-bottom: 0;
}
</style>
