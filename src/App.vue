<template>
  <v-app>
    <v-app-bar app color="ash" dark>
      <div class="d-flex align-center" @click="dialog4 = logoActionCondition()">
        <v-img
          alt="Editor Logo"
          class="d-none d-md-block mr-2"
          contain
          :src="require('./assets/logo.png')"
          width="105"
        />
        <v-img
          alt="Editor Logo"
          class="d-md-none mr-2"
          contain
          :src="require('./assets/logoSmall.png')"
          width="25"
        />
      </div>

      <v-dialog v-model="dialog4" max-width="500">
        <v-card>
          <v-card-title
            style="font-family: Bahnschrift, serif; color: rosybrown"
          >
            Are You Sure?
          </v-card-title>
          <v-card-text>
            Do you really want to go back to the homepage?
          </v-card-text>
          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: rosybrown"
              @click="dialog4 = false"
            >
              NO
            </v-btn>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: rosybrown"
              @click="
                dialog4 = false;
                goHome();
              "
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-spacer></v-spacer>
      <v-tooltip :disabled="$vuetify.breakpoint.mdAndUp" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="newFile" color="#E7DBDE" text v-bind="attrs" v-on="on">
            <span
              class="d-none d-md-block mr-2"
              style="font-family: Bahnschrift, serif"
              >New</span
            >
            <v-icon>mdi-file-outline</v-icon>
          </v-btn>
        </template>
        <span>New</span>
      </v-tooltip>

      <v-tooltip :disabled="$vuetify.breakpoint.mdAndUp" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click.stop="dialog = true"
            text
            v-bind="attrs"
            v-on="on"
            color="#E7DBDE"
          >
            <span
              class="d-none d-md-block mr-2"
              style="font-family: Bahnschrift, serif"
              >IMPORT</span
            >
            <v-icon>mdi-import</v-icon>
          </v-btn>
        </template>
        <span>Import</span>
      </v-tooltip>

      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title
            style="font-family: Bahnschrift, serif; color: rosybrown"
          >
            IMPORT A JSON FILE
          </v-card-title>

          <v-card-text>
            <v-file-input
              accept=".json"
              label="File input"
              small-chips
              truncate-length="15"
              solo
              color="#BC8F8F"
              v-model="chosenFile"
            >
            </v-file-input>
          </v-card-text>

          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: rosybrown"
              @click="dialog = false"
            >
              Cancel
            </v-btn>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: rosybrown"
              @click="
                dialog = false;
                importFile();
              "
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-tooltip :disabled="$vuetify.breakpoint.mdAndUp" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="save()"
            color="#E7DBDE"
            text
            v-bind="attrs"
            v-on="on"
            v-show="btnShowCondition()"
          >
            <span
              class="d-none d-md-block mr-2"
              style="font-family: Bahnschrift, serif"
              >SAVE</span
            >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </template>
        <span>Save</span>
      </v-tooltip>

      <v-tooltip :disabled="$vuetify.breakpoint.mdAndUp" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="restore()"
            color="#E7DBDE"
            text
            v-bind="attrs"
            v-on="on"
            v-show="btnShowCondition()"
          >
            <span
              class="d-none d-md-block mr-2"
              style="font-family: Bahnschrift, serif"
              >REVERT</span
            >
            <v-icon>mdi-backup-restore</v-icon>
          </v-btn>
        </template>
        <span>Revert</span>
      </v-tooltip>

      <v-tooltip :disabled="$vuetify.breakpoint.mdAndUp" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click.stop="dialog2 = true"
            color="#E7DBDE"
            text
            v-bind="attrs"
            v-on="on"
            v-show="btnShowCondition()"
          >
            <span
              class="d-none d-md-block mr-2"
              style="font-family: Bahnschrift, serif"
              >Export</span
            >
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </template>
        <span>Export</span>
      </v-tooltip>

      <v-dialog v-model="dialog2" max-width="500">
        <v-card>
          <v-card-title
            style="font-family: Bahnschrift, serif; color: rosybrown"
          >
            EXPORT AS JSON
          </v-card-title>

          <v-card-text>
            <v-text-field
              label="File Name"
              clearable
              filled
              color="#BC8F8F"
              v-model="fileName"
            ></v-text-field>
          </v-card-text>

          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: rosybrown"
              @click="dialog2 = false"
            >
              Cancel
            </v-btn>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: rosybrown"
              @click="
                dialog2 = false;
                exportFile(fileName + '.json');
              "
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-tooltip :disabled="$vuetify.breakpoint.mdAndUp" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click.stop="dialog3 = true"
            color="#E7DBDE"
            text
            v-bind="attrs"
            v-on="on"
            v-show="btnShowCondition()"
          >
            <span
              class="d-none d-md-block mr-2"
              style="font-family: Bahnschrift, serif"
              >INSTRUCTIONS</span
            >
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </template>
        <span>Instructions</span>
      </v-tooltip>

      <v-dialog v-model="dialog3" max-width="500">
        <v-card>
          <v-card-title
            style="font-family: Bahnschrift, serif; color: rosybrown"
          >
            Instructions
          </v-card-title>
          <v-card-text>
            Use this tool in a desktop or large screen for better experience.<br />
            Use the NEW button to start building a new JSON file.<br />
            Use the IMPORT button to import an existing JSON file to edit.<br />
            Use the SAVE button to save the current state.<br />
            Use the REVERT button to revert back to the last saved state.<br />
            Use the EXPORT button to export the content as a JSON file.<br />
            The User can view upto 4 levels of JSON fields in the JSON FORM VIEW
            <br />
            The User can directly edit Value fields in the JSON FORM VIEW <br />
            Use the <v-icon>mdi-plus-circle</v-icon> to add new JSON fields.
            <br />
            Use the <v-icon>mdi-delete</v-icon> button to delete a field.<br />
            Use the <v-icon>mdi-drag</v-icon> button to drag and sort the
            fields.<br />
            Use the <v-icon>mdi-key-change</v-icon> button to edit/change the
            key value of the field.
          </v-card-text>
          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="color1"
              style="font-family: Bahnschrift, serif; color: rosybrown"
              @click="dialog3 = false"
            >
              CLOSE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-tooltip :disabled="$vuetify.breakpoint.mdAndUp" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="dark()" color="#E7DBDE" text v-bind="attrs" v-on="on">
            <span
              class="d-none d-md-block mr-2"
              style="font-family: Bahnschrift, serif"
              >THEME</span
            >
            <v-icon>mdi-invert-colors</v-icon>
          </v-btn>
        </template>
        <span>Theme</span>
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";

export default Vue.extend({
  name: "App",
  methods: {
    dark() {
      if (this.$vuetify.theme.dark == true) this.$vuetify.theme.dark = false;
      else this.$vuetify.theme.dark = true;
    },

    importFile() {
      if (this.chosenFile == null) {
        alert("No File Has Been Chosen");
        this.dialog = true;
      } else if (this.chosenFile) {
        let reader = new FileReader();
        reader.readAsText(this.chosenFile);

        reader.onload = () => {
          this.tempData = reader.result;
          this.backupData = JSON.parse(this.tempData);
          this.assayData = JSON.parse(this.tempData);
          this.$store.commit("addBackupData", this.backupData);
          this.$store.commit("addAssayData", this.assayData);
        };
        this.$router.push("/Editor").catch((err) => {
          return err;
        });
      }
    },

    goHome() {
      this.$store.commit("addBackupData", null);
      this.$store.commit("addAssayData", null);
      this.$router.push("/").catch((err) => {
        return err;
      });
    },

    newFile() {
      this.$store.commit("addBackupData", {});
      this.$store.commit("addAssayData", {});
      this.$router.push("/Editor").catch((err) => {
        return err;
      });
    },

    restore() {
      this.$store.commit(
        "addAssayData",
        _.cloneDeep(this.$store.getters.getBackupData)
      );
    },

    save() {
      this.$store.commit(
        "addBackupData",
        _.cloneDeep(this.$store.getters.getAssayData)
      );
    },

    exportFile(fName: string) {
      this.$store.commit(
        "addBackupData",
        _.cloneDeep(this.$store.getters.getAssayData)
      );
      if (this.$store.getters.getBackupData == null) {
        alert("No Data Found");
      } else {
        const data = JSON.stringify(this.$store.getters.getBackupData, null, 2);
        const blob = new Blob([data], { type: "text/plain" });
        //const e = document.createEvent('MouseEvents'),
        const e = new MouseEvent("click"),
          a = document.createElement("a");
        a.download = fName;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
        a.dispatchEvent(e);
        //a.dispatchEvent(new MouseEvent('click'));
      }
    },

    btnShowCondition() {
      if (this.$router.currentRoute.path == "/") return false;
      else return true;
    },

    logoActionCondition() {
      if (this.$router.currentRoute.path == "/") return false;
      else return true;
    },
  },

  data: () => ({
    dialog: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    fileName: "Assay Definition",
    chosenFile: null as any,
    tempData: null as any,
    assayData: {},
    backupData: {},
  }),
});
</script>
