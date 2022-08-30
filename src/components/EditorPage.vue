<template>
  <v-container fluid>
    <v-row>
      <!-- FORM View -->

      <v-col cols="12" sm="6" xs="12" md="6" lg="6">
        <v-card
          class="overflow-y-auto"
          tile
          color="color1"
          min-height="88vh"
          max-height="88vh"
        >
          <v-card-title
            class="justify-center"
            id="title"
            style="font-family: Bahnschrift, serif; color: rosybrown"
            >FORM VIEW</v-card-title
          >
          <v-card-text>
            <AddData :j-data="jsonData" />
            <draggable
              :v-model="jsonData"
              handle=".handle"
              @update="
                sortUpdate($event, jsonData, null, null, null, null, null, null)
              "
            >
              <div
                v-for="(value_0, key_0) in getJson()"
                :key="key_0"
                :class="key_0"
              >
                <div v-if="dataTypeCheck(value_0)">
                  <v-row>
                    <v-col style="max-width: available" class="mr-auto">
                      <v-expansion-panels inset multiple>
                        <v-expansion-panel>
                          <v-expansion-panel-header color="color2">
                            {{ key_0 }}
                          </v-expansion-panel-header>
                          <v-expansion-panel-content color="color2">
                            <AddData
                              :j-data="value_0"
                              :key-value="key_0"
                              :global-j-data="jsonData"
                            />

                            <div v-if="Array.isArray(value_0)">
                              <draggable :list="value_0" handle=".handle">
                                <div
                                  v-for="(value_1, key_1) in value_0"
                                  :key="key_1"
                                  :class="key_1"
                                >
                                  <div v-if="dataTypeCheck(value_1)">
                                    <v-row>
                                      <v-col
                                        style="max-width: available"
                                        class="mr-auto"
                                      >
                                        <v-expansion-panels inset multiple>
                                          <v-expansion-panel>
                                            <v-expansion-panel-header
                                              color="color3"
                                            >
                                              {{ key_1 }}
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content
                                              color="color3"
                                            >
                                              <AddData
                                                :j-data="value_1"
                                                :key-value="key_1"
                                                :global-j-data="value_0"
                                              />

                                              <div
                                                v-if="Array.isArray(value_1)"
                                              >
                                                <draggable
                                                  :list="value_1"
                                                  handle=".handle"
                                                >
                                                  <div
                                                    v-for="(
                                                      value_2, key_2
                                                    ) in value_1"
                                                    :key="key_2"
                                                    :class="key_2"
                                                  >
                                                    <div
                                                      v-if="
                                                        dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-row>
                                                        <v-col
                                                          style="
                                                            max-width: available;
                                                          "
                                                          class="mr-auto"
                                                        >
                                                          <v-expansion-panels
                                                            inset
                                                            multiple
                                                          >
                                                            <v-expansion-panel>
                                                              <v-expansion-panel-header
                                                                color="color4"
                                                              >
                                                                {{ key_2 }}
                                                              </v-expansion-panel-header>
                                                              <v-expansion-panel-content
                                                                color="color4"
                                                              >
                                                                <AddData
                                                                  :j-data="
                                                                    value_2
                                                                  "
                                                                  :key-value="
                                                                    key_2
                                                                  "
                                                                  :global-j-data="
                                                                    value_1
                                                                  "
                                                                />

                                                                <div
                                                                  v-if="
                                                                    Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :list="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>

                                                                <div
                                                                  v-if="
                                                                    !Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :v-model="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                    @update="
                                                                      sortUpdate(
                                                                        $event,
                                                                        value_2,
                                                                        key_2,
                                                                        value_1,
                                                                        key_1,
                                                                        value_0,
                                                                        key_0,
                                                                        jsonData
                                                                      )
                                                                    "
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>
                                                              </v-expansion-panel-content>
                                                            </v-expansion-panel>
                                                          </v-expansion-panels>
                                                        </v-col>
                                                        <v-col
                                                          cols="auto"
                                                          class="
                                                            align-self-center
                                                          "
                                                        >
                                                          <template>
                                                            <v-icon
                                                              @click="
                                                                removeDataConfirm(
                                                                  value_1,
                                                                  key_2
                                                                )
                                                              "
                                                              >mdi-delete</v-icon
                                                            >
                                                            <v-icon
                                                              class="handle"
                                                              >mdi-drag</v-icon
                                                            >
                                                          </template>
                                                        </v-col>
                                                      </v-row>
                                                      <br />
                                                    </div>

                                                    <div
                                                      v-if="
                                                        !dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-text-field
                                                        :label="
                                                          key_2.toString()
                                                        "
                                                        clearable
                                                        type="text"
                                                        filled
                                                        color="#BC8F8F"
                                                        v-model="value_1[key_2]"
                                                      >
                                                        <template
                                                          slot="append-outer"
                                                        >
                                                          <v-icon
                                                            @click="
                                                              removeDataConfirm(
                                                                value_1,
                                                                key_2
                                                              )
                                                            "
                                                            >mdi-delete</v-icon
                                                          >
                                                          <v-icon class="handle"
                                                            >mdi-drag</v-icon
                                                          >
                                                        </template>
                                                      </v-text-field>
                                                    </div>
                                                  </div>
                                                </draggable>
                                              </div>

                                              <div
                                                v-if="!Array.isArray(value_1)"
                                              >
                                                <draggable
                                                  :v-model="value_1"
                                                  handle=".handle"
                                                  @update="
                                                    sortUpdate(
                                                      $event,
                                                      value_1,
                                                      key_1,
                                                      value_0,
                                                      key_0,
                                                      jsonData,
                                                      null,
                                                      null
                                                    )
                                                  "
                                                >
                                                  <div
                                                    v-for="(
                                                      value_2, key_2
                                                    ) in value_1"
                                                    :key="key_2"
                                                    :class="key_2"
                                                  >
                                                    <div
                                                      v-if="
                                                        dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-row>
                                                        <v-col
                                                          style="
                                                            max-width: available;
                                                          "
                                                          class="mr-auto"
                                                        >
                                                          <v-expansion-panels
                                                            inset
                                                            multiple
                                                          >
                                                            <v-expansion-panel>
                                                              <v-expansion-panel-header
                                                                color="color4"
                                                              >
                                                                {{ key_2 }}
                                                              </v-expansion-panel-header>
                                                              <v-expansion-panel-content
                                                                color="color4"
                                                              >
                                                                <AddData
                                                                  :j-data="
                                                                    value_2
                                                                  "
                                                                  :key-value="
                                                                    key_2
                                                                  "
                                                                  :global-j-data="
                                                                    value_1
                                                                  "
                                                                />

                                                                <div
                                                                  v-if="
                                                                    Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :list="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>

                                                                <div
                                                                  v-if="
                                                                    !Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :v-model="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                    @update="
                                                                      sortUpdate(
                                                                        $event,
                                                                        value_2,
                                                                        key_2,
                                                                        value_1,
                                                                        key_1,
                                                                        value_0,
                                                                        key_0,
                                                                        jsonData
                                                                      )
                                                                    "
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>
                                                              </v-expansion-panel-content>
                                                            </v-expansion-panel>
                                                          </v-expansion-panels>
                                                        </v-col>
                                                        <v-col
                                                          cols="auto"
                                                          class="
                                                            align-self-center
                                                          "
                                                        >
                                                          <template>
                                                            <v-icon
                                                              @click="
                                                                removeDataConfirm(
                                                                  value_1,
                                                                  key_2
                                                                )
                                                              "
                                                              >mdi-delete</v-icon
                                                            >
                                                            <v-icon
                                                              class="handle"
                                                              >mdi-drag</v-icon
                                                            >
                                                          </template>
                                                        </v-col>
                                                      </v-row>
                                                      <br />
                                                    </div>

                                                    <div
                                                      v-if="
                                                        !dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-text-field
                                                        :label="
                                                          key_2.toString()
                                                        "
                                                        clearable
                                                        type="text"
                                                        filled
                                                        color="#BC8F8F"
                                                        v-model="value_1[key_2]"
                                                      >
                                                        <template
                                                          slot="append-outer"
                                                        >
                                                          <v-icon
                                                            @click="
                                                              removeDataConfirm(
                                                                value_1,
                                                                key_2
                                                              )
                                                            "
                                                            >mdi-delete</v-icon
                                                          >
                                                          <v-icon class="handle"
                                                            >mdi-drag</v-icon
                                                          >
                                                        </template>
                                                      </v-text-field>
                                                    </div>
                                                  </div>
                                                </draggable>
                                              </div>
                                            </v-expansion-panel-content>
                                          </v-expansion-panel>
                                        </v-expansion-panels>
                                      </v-col>
                                      <v-col
                                        cols="auto"
                                        class="align-self-center"
                                      >
                                        <template>
                                          <v-icon
                                            @click="
                                              removeDataConfirm(value_0, key_1)
                                            "
                                            >mdi-delete</v-icon
                                          >
                                          <v-icon class="handle"
                                            >mdi-drag</v-icon
                                          >
                                        </template>
                                      </v-col>
                                    </v-row>
                                    <br />
                                  </div>

                                  <div v-if="!dataTypeCheck(value_1)">
                                    <v-text-field
                                      :label="key_1.toString()"
                                      clearable
                                      type="text"
                                      filled
                                      color="#BC8F8F"
                                      v-model="value_0[key_1]"
                                    >
                                      <template slot="append-outer">
                                        <v-icon
                                          @click="
                                            removeDataConfirm(value_0, key_1)
                                          "
                                          >mdi-delete</v-icon
                                        >
                                        <v-icon class="handle">mdi-drag</v-icon>
                                      </template>
                                    </v-text-field>
                                  </div>
                                </div>
                              </draggable>
                            </div>

                            <div v-if="!Array.isArray(value_0)">
                              <draggable
                                :v-model="value_0"
                                handle=".handle"
                                @update="
                                  sortUpdate(
                                    $event,
                                    value_0,
                                    key_0,
                                    jsonData,
                                    null,
                                    null,
                                    null,
                                    null
                                  )
                                "
                              >
                                <div
                                  v-for="(value_1, key_1) in value_0"
                                  :key="key_1"
                                  :class="key_1"
                                >
                                  <div v-if="dataTypeCheck(value_1)">
                                    <v-row>
                                      <v-col
                                        style="max-width: available"
                                        class="mr-auto"
                                      >
                                        <v-expansion-panels inset multiple>
                                          <v-expansion-panel>
                                            <v-expansion-panel-header
                                              color="color3"
                                            >
                                              {{ key_1 }}
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content
                                              color="color3"
                                            >
                                              <AddData
                                                :j-data="value_1"
                                                :key-value="key_1"
                                                :global-j-data="value_0"
                                              />

                                              <div
                                                v-if="Array.isArray(value_1)"
                                              >
                                                <draggable
                                                  :list="value_1"
                                                  handle=".handle"
                                                >
                                                  <div
                                                    v-for="(
                                                      value_2, key_2
                                                    ) in value_1"
                                                    :key="key_2"
                                                    :class="key_2"
                                                  >
                                                    <div
                                                      v-if="
                                                        dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-row>
                                                        <v-col
                                                          style="
                                                            max-width: available;
                                                          "
                                                          class="mr-auto"
                                                        >
                                                          <v-expansion-panels
                                                            inset
                                                            multiple
                                                          >
                                                            <v-expansion-panel>
                                                              <v-expansion-panel-header
                                                                color="color4"
                                                              >
                                                                {{ key_2 }}
                                                              </v-expansion-panel-header>
                                                              <v-expansion-panel-content
                                                                color="color4"
                                                              >
                                                                <AddData
                                                                  :j-data="
                                                                    value_2
                                                                  "
                                                                  :key-value="
                                                                    key_2
                                                                  "
                                                                  :global-j-data="
                                                                    value_1
                                                                  "
                                                                />

                                                                <div
                                                                  v-if="
                                                                    Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :list="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>

                                                                <div
                                                                  v-if="
                                                                    !Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :v-model="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                    @update="
                                                                      sortUpdate(
                                                                        $event,
                                                                        value_2,
                                                                        key_2,
                                                                        value_1,
                                                                        key_1,
                                                                        value_0,
                                                                        key_0,
                                                                        jsonData
                                                                      )
                                                                    "
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>
                                                              </v-expansion-panel-content>
                                                            </v-expansion-panel>
                                                          </v-expansion-panels>
                                                        </v-col>
                                                        <v-col
                                                          cols="auto"
                                                          class="
                                                            align-self-center
                                                          "
                                                        >
                                                          <template>
                                                            <v-icon
                                                              @click="
                                                                removeDataConfirm(
                                                                  value_1,
                                                                  key_2
                                                                )
                                                              "
                                                              >mdi-delete</v-icon
                                                            >
                                                            <v-icon
                                                              class="handle"
                                                              >mdi-drag</v-icon
                                                            >
                                                          </template>
                                                        </v-col>
                                                      </v-row>
                                                      <br />
                                                    </div>

                                                    <div
                                                      v-if="
                                                        !dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-text-field
                                                        :label="
                                                          key_2.toString()
                                                        "
                                                        clearable
                                                        type="text"
                                                        filled
                                                        color="#BC8F8F"
                                                        v-model="value_1[key_2]"
                                                      >
                                                        <template
                                                          slot="append-outer"
                                                        >
                                                          <v-icon
                                                            @click="
                                                              removeDataConfirm(
                                                                value_1,
                                                                key_2
                                                              )
                                                            "
                                                            >mdi-delete</v-icon
                                                          >
                                                          <v-icon class="handle"
                                                            >mdi-drag</v-icon
                                                          >
                                                        </template>
                                                      </v-text-field>
                                                    </div>
                                                  </div>
                                                </draggable>
                                              </div>

                                              <div
                                                v-if="!Array.isArray(value_1)"
                                              >
                                                <draggable
                                                  :v-model="value_1"
                                                  handle=".handle"
                                                  @update="
                                                    sortUpdate(
                                                      $event,
                                                      value_1,
                                                      key_1,
                                                      value_0,
                                                      key_0,
                                                      jsonData,
                                                      null,
                                                      null
                                                    )
                                                  "
                                                >
                                                  <div
                                                    v-for="(
                                                      value_2, key_2
                                                    ) in value_1"
                                                    :key="key_2"
                                                    :class="key_2"
                                                  >
                                                    <div
                                                      v-if="
                                                        dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-row>
                                                        <v-col
                                                          style="
                                                            max-width: available;
                                                          "
                                                          class="mr-auto"
                                                        >
                                                          <v-expansion-panels
                                                            inset
                                                            multiple
                                                          >
                                                            <v-expansion-panel>
                                                              <v-expansion-panel-header
                                                                color="color4"
                                                              >
                                                                {{ key_2 }}
                                                              </v-expansion-panel-header>
                                                              <v-expansion-panel-content
                                                                color="color4"
                                                              >
                                                                <AddData
                                                                  :j-data="
                                                                    value_2
                                                                  "
                                                                  :key-value="
                                                                    key_2
                                                                  "
                                                                  :global-j-data="
                                                                    value_1
                                                                  "
                                                                />

                                                                <div
                                                                  v-if="
                                                                    Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :list="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>

                                                                <div
                                                                  v-if="
                                                                    !Array.isArray(
                                                                      value_2
                                                                    )
                                                                  "
                                                                >
                                                                  <draggable
                                                                    :v-model="
                                                                      value_2
                                                                    "
                                                                    handle=".handle"
                                                                    @update="
                                                                      sortUpdate(
                                                                        $event,
                                                                        value_2,
                                                                        key_2,
                                                                        value_1,
                                                                        key_1,
                                                                        value_0,
                                                                        key_0,
                                                                        jsonData
                                                                      )
                                                                    "
                                                                  >
                                                                    <div
                                                                      v-for="(
                                                                        value_3,
                                                                        key_3
                                                                      ) in value_2"
                                                                      :key="
                                                                        key_3
                                                                      "
                                                                      :class="
                                                                        key_3
                                                                      "
                                                                    >
                                                                      <v-text-field
                                                                        :label="
                                                                          key_3.toString()
                                                                        "
                                                                        clearable
                                                                        type="text"
                                                                        filled
                                                                        color="#BC8F8F"
                                                                        v-model="
                                                                          value_2[
                                                                            key_3
                                                                          ]
                                                                        "
                                                                      >
                                                                        <template
                                                                          slot="append-outer"
                                                                        >
                                                                          <v-icon
                                                                            @click="
                                                                              removeDataConfirm(
                                                                                value_2,
                                                                                key_3
                                                                              )
                                                                            "
                                                                            >mdi-delete</v-icon
                                                                          >
                                                                          <v-icon
                                                                            class="
                                                                              handle
                                                                            "
                                                                            >mdi-drag</v-icon
                                                                          >
                                                                        </template>
                                                                      </v-text-field>
                                                                    </div>
                                                                  </draggable>
                                                                </div>
                                                              </v-expansion-panel-content>
                                                            </v-expansion-panel>
                                                          </v-expansion-panels>
                                                        </v-col>
                                                        <v-col
                                                          cols="auto"
                                                          class="
                                                            align-self-center
                                                          "
                                                        >
                                                          <template>
                                                            <v-icon
                                                              @click="
                                                                removeDataConfirm(
                                                                  value_1,
                                                                  key_2
                                                                )
                                                              "
                                                              >mdi-delete</v-icon
                                                            >
                                                            <v-icon
                                                              class="handle"
                                                              >mdi-drag</v-icon
                                                            >
                                                          </template>
                                                        </v-col>
                                                      </v-row>
                                                      <br />
                                                    </div>

                                                    <div
                                                      v-if="
                                                        !dataTypeCheck(value_2)
                                                      "
                                                    >
                                                      <v-text-field
                                                        :label="
                                                          key_2.toString()
                                                        "
                                                        clearable
                                                        type="text"
                                                        filled
                                                        color="#BC8F8F"
                                                        v-model="value_1[key_2]"
                                                      >
                                                        <template
                                                          slot="append-outer"
                                                        >
                                                          <v-icon
                                                            @click="
                                                              removeDataConfirm(
                                                                value_1,
                                                                key_2
                                                              )
                                                            "
                                                            >mdi-delete</v-icon
                                                          >
                                                          <v-icon class="handle"
                                                            >mdi-drag</v-icon
                                                          >
                                                        </template>
                                                      </v-text-field>
                                                    </div>
                                                  </div>
                                                </draggable>
                                              </div>
                                            </v-expansion-panel-content>
                                          </v-expansion-panel>
                                        </v-expansion-panels>
                                      </v-col>
                                      <v-col
                                        cols="auto"
                                        class="align-self-center"
                                      >
                                        <template>
                                          <v-icon
                                            @click="
                                              removeDataConfirm(value_0, key_1)
                                            "
                                            >mdi-delete</v-icon
                                          >
                                          <v-icon class="handle"
                                            >mdi-drag</v-icon
                                          >
                                        </template>
                                      </v-col>
                                    </v-row>
                                    <br />
                                  </div>

                                  <div v-if="!dataTypeCheck(value_1)">
                                    <v-text-field
                                      :label="key_1.toString()"
                                      clearable
                                      type="text"
                                      filled
                                      color="#BC8F8F"
                                      v-model="value_0[key_1]"
                                    >
                                      <template slot="append-outer">
                                        <v-icon
                                          @click="
                                            removeDataConfirm(value_0, key_1)
                                          "
                                          >mdi-delete</v-icon
                                        >
                                        <v-icon class="handle">mdi-drag</v-icon>
                                      </template>
                                    </v-text-field>
                                  </div>
                                </div>
                              </draggable>
                            </div>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>
                    <v-col cols="auto" class="align-self-center">
                      <template>
                        <v-icon @click="removeDataConfirm(jsonData, key_0)"
                          >mdi-delete</v-icon
                        >
                        <v-icon class="handle">mdi-drag</v-icon>
                      </template>
                    </v-col>
                  </v-row>
                  <br />
                </div>

                <div v-if="!dataTypeCheck(value_0)">
                  <v-text-field
                    :label="key_0.toString()"
                    type="text"
                    clearable
                    filled
                    color="#BC8F8F"
                    v-model="jsonData[key_0]"
                  >
                    <template slot="append-outer">
                      <v-icon @click="removeDataConfirm(jsonData, key_0)"
                        >mdi-delete</v-icon
                      >
                      <v-icon class="handle">mdi-drag</v-icon>
                    </template>
                  </v-text-field>
                </div>
              </div>
            </draggable>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- JSON View -->

      <v-col cols="12" sm="6" xs="12" md="6" lg="6">
        <v-card
          class="overflow-y-auto"
          tile
          color="color1"
          min-height="88vh"
          max-height="88vh"
        >
          <v-card-title
            class="justify-center"
            style="font-family: Bahnschrift, serif; color: rosybrown"
            >JSON VIEW</v-card-title
          >
          <v-card-text>
            <pre id="json">{{ displayJson }}</pre>
          </v-card-text>
          <br />
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title style="font-family: Bahnschrift, serif; color: rosybrown">
          Are You Sure?
        </v-card-title>
        <v-card-text>
          Do you really want to delete this field?. This process cannot be
          undone.
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
              removeData();
            "
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="insDialog"
      v-if="this.$store.getters.getInsFlag"
      max-width="500"
    >
      <v-card>
        <v-card-title style="font-family: Bahnschrift, serif; color: rosybrown">
          Instructions
        </v-card-title>
        <v-card-text>
          Use the NEW button to start building a new JSON file.<br />
          Use the IMPORT button to import an existing JSON file to edit.<br />
          Use the SAVE button to save the current state.<br />
          Use the REVERT button to revert back to the last saved state.<br />
          Use the EXPORT button to export the content as a JSON file.
        </v-card-text>
        <v-divider class="mt-12"></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="color1"
            style="font-family: Bahnschrift, serif; color: rosybrown"
            @click="
              insDialog = false;
              removeInsDialog();
            "
          >
            Don't Show Again
          </v-btn>

          <v-btn
            color="color1"
            style="font-family: Bahnschrift, serif; color: rosybrown"
            @click="insDialog = false"
          >
            CLOSE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import AddData from "./AddData.vue";
import draggable from "vuedraggable";

export default Vue.extend({
  name: "EditorPage",
  components: { AddData, draggable },

  data: () => ({
    jsonData: null as any,
    dialog: false,
    insDialog: true,
    dVal: null as any,
    dKey: null as any,
  }),

  computed: {
    displayJson() {
      return JSON.stringify(this.jsonData, null, 2);
    },
  },

  methods: {
    removeInsDialog() {
      this.$store.commit("changeInsFlag");
    },

    getJson() {
      this.jsonData = this.$store.getters.getAssayData;
      return this.jsonData;
    },

    removeData() {
      Vue.delete(this.dVal, this.dKey);
    },

    removeDataConfirm(Data: any, id: any) {
      this.dVal = Data;
      this.dKey = id;
      this.dialog = true;
    },

    dataTypeCheck(value: any) {
      return _.isObject(value) || _.isArray(value);
    },

    sortUpdate(
      event: any,
      val: any,
      key: any,
      val2: any,
      key2: any,
      val3: any,
      key3: any,
      val4: any
    ) {
      //console.log(Object.keys(val))
      //console.log(event)
      let newKeyOrder = [] as any;
      event.to.childNodes.forEach((element: any) => {
        newKeyOrder.push(element.className);
      });
      const newObject = newKeyOrder.reduce((acc: any, cur: any) => {
        acc[cur] = val[cur];
        return acc;
      }, {});

      if (key == null) {
        this.$store.commit("addAssayData", newObject);
      } else if (key2 == null) {
        Vue.set(val2, key, newObject);
        this.$store.commit("addAssayData", val2);
      } else if (key3 == null) {
        Vue.set(val2, key, newObject);
        Vue.set(val3, key2, val2);
        this.$store.commit("addAssayData", val3);
      } else {
        Vue.set(val2, key, newObject);
        Vue.set(val3, key2, val2);
        Vue.set(val4, key3, val3);
        this.$store.commit("addAssayData", val4);
      }
    },
  },
});
</script>

<style>
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: ghostwhite;
}

::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px ghostwhite;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: grey;
}
</style>
