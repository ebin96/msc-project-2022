<template>
  <div>
    <v-btn icon>
      <v-icon @click.stop="dialog = true" @click="tempData()"
        >mdi-plus-circle</v-icon
      >
    </v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title style="font-family: Bahnschrift, serif; color: #bc8f8f">
          ADD DETAILS
        </v-card-title>

        <v-card-text>
          <!-- Dropdown input for array type and others -->

          <v-select
            v-if="dataTypeCheck() === 'Main'"
            :items="optionsMain"
            filled
            color="#BC8F8F"
            item-color="#BC8F8F"
            label="Select input field type"
            v-model="selected"
          ></v-select>

          <v-select
            v-if="dataTypeCheck() === 'Array'"
            :items="optionsArray"
            filled
            color="#BC8F8F"
            item-color="#BC8F8F"
            label="Select input field type"
            v-model="selected"
          ></v-select>

          <!--String and Boolean (Key-Value) Input -->

          <div v-if="selected === 'Key-Value(String or Boolean)'">
            <v-text-field
              label="Key"
              clearable
              filled
              color="#BC8F8F"
              v-model="value1"
            ></v-text-field>

            <v-text-field
              label="Value"
              clearable
              filled
              color="#BC8F8F"
              v-model="value2"
            ></v-text-field>

            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                :disabled="!(value1 && value2)"
                @click="
                  dialog = false;
                  addKeyValue();
                  resetSelection();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>

          <!--Number(Key-Value) Input -->

          <div v-if="selected === 'Key-Value(Number)'">
            <v-text-field
              label="Key"
              clearable
              filled
              color="#BC8F8F"
              v-model="value1"
            ></v-text-field>

            <v-text-field
              label="Value"
              clearable
              filled
              type="number"
              hide-spin-buttons
              color="#BC8F8F"
              v-model.number="value2"
            ></v-text-field>

            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                :disabled="!(value1 && value2)"
                @click="
                  dialog = false;
                  addKeyValue();
                  resetSelection();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>

          <!-- Object(key-Object) Input -->

          <div v-if="selected === 'Key-Object'">
            <v-text-field
              label="Key(Object Name)"
              clearable
              filled
              color="#BC8F8F"
              v-model="value1"
            ></v-text-field>

            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                :disabled="!value1"
                @click="
                  dialog = false;
                  value2 = {};
                  addKeyValue();
                  resetSelection();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>

          <!-- Array Input -->

          <div v-if="selected === 'Key-Array'">
            <v-text-field
              label="Key"
              clearable
              filled
              color="#BC8F8F"
              v-model="value1"
            ></v-text-field>

            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  removeData();
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                :disabled="!value1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  addArray();
                  resetSelection();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>

          <!-- Array Value(String or Boolean) Input -->

          <div v-if="selected === 'Value(String or Boolean)'">
            <v-text-field
              label="Value"
              clearable
              filled
              color="#BC8F8F"
              v-model="value1"
            ></v-text-field>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: #bc8f8f"
              @click="
                addValue();
                value1 = null;
              "
            >
              Add
            </v-btn>

            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  removeData();
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>

          <!-- Array Value(Number) Input -->

          <div v-if="selected === 'Value(Number)'">
            <v-text-field
              label="Value"
              clearable
              filled
              color="#BC8F8F"
              type="number"
              hide-spin-buttons
              v-model.number="value1"
            ></v-text-field>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: #bc8f8f"
              @click="
                addValue();
                value1 = null;
              "
            >
              Add
            </v-btn>

            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  removeData();
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>

          <!-- Array of Array Input -->

          <div v-if="selected === 'Array'">
            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                  addArrayOfArray();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>

          <!-- Array Object Input -->

          <div v-if="selected === 'Object'">
            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                "
              >
                Cancel
              </v-btn>

              <v-btn
                color="color1"
                style="font-family: Bahnschrift, serif; color: #bc8f8f"
                @click="
                  dialog = false;
                  resetSelection();
                  addObject();
                "
              >
                OK
              </v-btn>
            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";

export default Vue.extend({
  name: "AddData",
  props: ["jData", "keyValue", "globalJData"],

  data: () => ({
    dialog: false,
    value1: null as any,
    value2: null as any,
    selected: undefined,
    temp: null,
    sFlag: false,
    nFlag: false,
    optionsMain: [
      "Key-Value(String or Boolean)",
      "Key-Value(Number)",
      "Key-Object",
      "Key-Array",
    ],
    optionsArray: [
      "Value(String or Boolean)",
      "Value(Number)",
      "Array",
      "Object",
    ],
    optionsBool: ["true", "false"],
  }),

  methods: {
    addKeyValue() {
      if (this.selected == "Key-Object") {
        this.value1 = _.snakeCase(this.value1);
        Vue.set(this.jData, this.value1, this.value2);
      } else {
        if (typeof this.value2 == "number") {
          this.value1 = _.snakeCase(this.value1);
          Vue.set(this.jData, this.value1, this.value2);
        } else {
          if (this.value2.toLowerCase() == "true") {
            this.value1 = _.snakeCase(this.value1);
            Vue.set(this.jData, this.value1, Boolean(this.value2));
          } else if (this.value2.toLowerCase() == "false") {
            this.value1 = _.snakeCase(this.value1);
            Vue.set(this.jData, this.value1, Boolean(!this.value2));
          } else {
            this.value1 = _.snakeCase(this.value1);
            Vue.set(this.jData, this.value1, this.value2);
          }
        }
      }
    },

    addArray() {
      this.value1 = _.snakeCase(this.value1);
      Vue.set(this.jData, this.value1, []);
    },

    addArrayOfArray() {
      // eslint-disable-next-line
      this.globalJData[this.keyValue].push([]);
    },

    addDataArray() {
      // eslint-disable-next-line
      this.jData[this.value1].push(this.value2);
    },

    addValue() {
      if (this.value1.toLowerCase() == "true") {
        // eslint-disable-next-line
        this.globalJData[this.keyValue].push(Boolean(this.value1));
      } else if (this.value1.toLowerCase() == "false") {
        // eslint-disable-next-line
        this.globalJData[this.keyValue].push(Boolean(!this.value1));
      } else {
        // eslint-disable-next-line
        this.globalJData[this.keyValue].push(this.value1);
      }
    },

    addObject() {
      // eslint-disable-next-line
      this.globalJData[this.keyValue].push({});
    },

    removeData() {
      if (this.dataTypeCheck() == "Array") {
        Vue.set(this.globalJData, this.keyValue, this.temp);
      } else {
        Vue.delete(this.jData, this.value1);
      }
    },

    tempData() {
      if (this.dataTypeCheck() == "Array") {
        this.temp = _.cloneDeep(this.jData);
      }
    },
    resetSelection() {
      this.selected = undefined;
      this.value1 = null;
      this.value2 = null;
    },

    dataTypeCheck() {
      if (_.isArray(this.jData)) {
        return "Array";
      } else {
        return "Main";
      }
    },
  },
});
</script>
