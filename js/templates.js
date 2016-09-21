angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("js/src/modules/calculator/views/calculation.form.html",
    "<div ui-view=\"step_2\"></div>\n" +
    "<div ui-view=\"step_3\"></div>\n" +
    "<div ui-view=\"step_4\" ng-if=\"getCurrentCalcType() === 'full'\"></div>\n" +
    "<div ui-view=\"step_5\" ng-if=\"getCurrentCalcType() === 'simple'\"></div><!-- ng-if=\"getCurrentCalcType() === 'simple'\"-->\n" +
    "<div ui-view=\"step_6\" ng-show=\"getCurrentCalcType()\"></div>\n" +
    "<div ng-include=\"templates.program_list\" class=\"js-kasko-result\"></div>");
  $templateCache.put("js/src/modules/calculator/views/calculation.messages.html",
    "<div class=\"control-row calc-result-messages\" ng-if=\"messages.length\">\n" +
    "    <div class=\"calc-result-errors\">\n" +
    "        <div class=\"list-item\" ng-repeat=\"message in messages\">\n" +
    "            {{message}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculator/views/calculator.html",
    "<div ng-include=\"templates.navigation\"></div>\n" +
    "\n" +
    "<div class=\"calculator-block main-content-body template-{{$root.calcType}}\">\n" +
    "    <form name=\"calculation_form\"\n" +
    "          autocomplete=\"off\"\n" +
    "          ng-class=\"{'calculation-form_error': params.show_empty_fields}\"\n" +
    "          class=\"calculation-form\">\n" +
    "        <div ui-view></div>\n" +
    "    </form>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculator/views/document_uploader.html",
    "<ul class=\"uploader-queue\"\n" +
    "    nv-file-drop\n" +
    "    nv-file-over\n" +
    "    uploader=\"uploader\"\n" +
    "    over-class=\"uploader-queue_over\">\n" +
    "\n" +
    "    <li ng-if=\"!uploadedFiles.length && !uploader.queue.length\">\n" +
    "        Загрузка файлов\n" +
    "    </li>\n" +
    "\n" +
    "    <!-- EARLY UPLOADED FILES -->\n" +
    "    <li ng-repeat=\"file in uploadedFiles\" class=\"list-item animation-fade\">\n" +
    "        <div ng-if=\"file.mime_type.indexOf('image/') !== -1\">\n" +
    "            <a ng-href=\"{{file.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{file.file_url}}\" alt=\"{{file.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"file.mime_type === 'application/pdf'\">\n" +
    "            <a ng-href=\"{{file.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}pdf.png\" alt=\"{{file.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"file.mime_type === 'application/msword' || isDocument(file.mime_type)\">\n" +
    "            <a ng-href=\"{{file.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}doc_icon.png\" alt=\"{{file.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"uploader-queue-actions\">\n" +
    "            <button type=\"button\"\n" +
    "                    ng-click=\"removeUploadedImage(file)\"\n" +
    "                    class=\"ui button red mini\">Удалить\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <!-- NEW UPLOADED IMAGES -->\n" +
    "    <li ng-repeat=\"item in uploader.queue\" class=\"list-item animation-fade\">\n" +
    "        <div ng-if=\"item._file.type.indexOf('image/') !== -1\">\n" +
    "            <div ng-thumb=\"{ file: item._file, height: 70 }\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"item._file.type === 'application/pdf'\">\n" +
    "            <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}pdf.png\" alt=\"{{item.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"item._file.type === 'application/msword' || isDocument(item._file.type)\">\n" +
    "            <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}doc_icon.png\" alt=\"{{item.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"uploader-queue-actions\">\n" +
    "            <button type=\"button\"\n" +
    "                    ng-click=\"item.remove()\"\n" +
    "                    class=\"ui button red mini\">Удалить\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "</ul>");
  $templateCache.put("js/src/modules/calculator/views/navigation.html",
    "<div class=\"b-steps\">\n" +
    "    <div class=\"ui steps three\" ng-controller=\"calculatorNavigationCtrl\">\n" +
    "        <!--ng-class=\"{four: navigation.length === 4, five:  navigation.length === 5}\"-->\n" +
    "        <div class=\"step\"\n" +
    "             ng-repeat=\"navItem in navigation track by $index\"\n" +
    "             ng-click=\"goToStep($index)\"\n" +
    "             ng-hide=\"navItem.isHidden()\"\n" +
    "             ng-class=\"{\n" +
    "                active: navItem.active,\n" +
    "                disabled: navItem.condition_disabled()\n" +
    "             }\">\n" +
    "            <i class=\"icon\"\n" +
    "               ng-class=\"navItem.icon\"></i>\n" +
    "\n" +
    "            <div class=\"content\">\n" +
    "                <div class=\"title\" ng-bind-html=\"navItem.title\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.program_list.html",
    "<div class=\"ui form b-full-width-bg_white\" ng-if=\"calculationResult && calculationResult.length\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div>\n" +
    "            <table class=\"b-kasko-result ui very basic table\" ng-if=\"calculationResult && calculationResult[0]\">\n" +
    "                <tr>\n" +
    "                    <td><h4 ng-show=\"getResultWithKbm().variables.KBM.length || getResultWithKbm().variables.kbm\">КБМ:</h4></td>\n" +
    "                    <td class=\"c-tar\">\n" +
    "                        <h2 class=\"b-content_title mt5 nowrap\" ng-if=\"getResultWithKbm().variables.kbm && (cachedDrivers.length || !getResultWithKbm().variables.KBM)\">\n" +
    "                            <span ng-bind=\"getResultWithKbm().variables.kbm | priceFormatter:2\"></span>\n" +
    "                        </h2>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <h3 class=\"b-content_title mt5\"\n" +
    "                            ng-repeat=\"kbm in getResultWithKbm().variables.KBM track by $index\">\n" +
    "                            <span ng-bind=\"cachedDrivers[$index].last_name\"></span> <span\n" +
    "                            ng-bind=\"cachedDrivers[$index].first_name\"></span> <span\n" +
    "                            ng-if=\"cachedDrivers[$index].last_name\">—</span> <span ng-bind=\"kbm\"></span>\n" +
    "                        </h3>\n" +
    "                    </td>\n" +
    "                    <td></td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"css-divider-tilde ui divider horizontal header\">~</div>\n" +
    "        <div>\n" +
    "            <h1 class=\"b-content_title c-tac\">Выберите компанию для оформления договора:</h1>\n" +
    "\n" +
    "            <div class=\"ui grid three column mt30\">\n" +
    "                <div class=\"b-result column\"\n" +
    "                     align=\"center\"\n" +
    "                     tabindex=\"0\"\n" +
    "                     ng-repeat=\"result in calculationResult\"\n" +
    "                     ng-if=\"result.program.sum && result.program.sum != 0\"\n" +
    "                     ng-mousedown=\"selectResult(result.id)\"\n" +
    "                     ng-keypress=\"$event.keyCode == 13 && selectResult(result.id)\"\n" +
    "                     ng-class=\"{'b-result--selected': result.id === root.selectedResult.id}\"><!---->\n" +
    "                    <div>\n" +
    "                        <img ng-src=\"{{result.company_logo}}\" alt=\"\"/>\n" +
    "                        <div class=\"b-result_select\">\n" +
    "                            <i class=\"icon checkmark\"></i>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"b-result_sum c-tac mt5\">\n" +
    "                            <span ng-bind=\"result.program.sum | priceFormatter:0:'':false\"></span>.<small ng-bind=\"result.program.sum | fractionalFormatter:2\"></small> руб.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"mt55 c-tac\">\n" +
    "                <button class=\"m0 button ui branded big\"\n" +
    "                        ng-class=\"{loading: params.isCalculationProgress}\"\n" +
    "                        ng-disabled=\"disabledFormationPolicyButton() || calculation_form.$invalid || !calculationResult.length || !root.selectedResult\"\n" +
    "                        ui-sref=\"index.addingDocuments({calculationId: calculation.id, companyId: root.selectedResult.id})\"\n" +
    "                        type=\"button\">Оформить\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"p20 mt30\" ng-if=\"root.messages.length\">\n" +
    "    <div class=\"ui error message\">\n" +
    "        <ul class=\"list\">\n" +
    "            <li ng-repeat=\"message in root.messages\"><span ng-bind=\"message\"></span></li>\n" +
    "        </ul>\n" +
    "        <i class=\"close icon\" ng-click=\"root.messages.length = 0;\"></i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_2.html",
    "<!-- step 2 start -->\n" +
    "<div class=\"ui form b-full-width-bg_white css-small-sized-fields\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"ui stackable grid four column bottom aligned\">\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\" align=\"left\">\n" +
    "                    <label for=\"id_is_legal_entity\">\n" +
    "                        Тип собственника:\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_is_legal_entity\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-change=\"fieldChanged('is_legal_entity')\"\n" +
    "                         ng-model=\"calculation.is_legal_entity\"\n" +
    "                         sem-dropdown-items=\"dicts.isLegalEntity\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\">\n" +
    "                    <label>Срок страхования:</label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_insurance_duration\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-model=\"calculation.insurance_duration\"\n" +
    "                         sem-dropdown-items=\"dicts.insuranceDuration\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\">\n" +
    "                    <label for=\"id_calculation_at_date\">Дата начала действия договора:</label>\n" +
    "\n" +
    "                    <div class=\"ui icon input\">\n" +
    "                        <input type=\"text\"\n" +
    "                               jdatepicker\n" +
    "                               jdatepicker-year-range=\"{{getYearRange(-1, 0)}}\"\n" +
    "                               jdatepicker-only-future=\"true\"\n" +
    "                               placeholder=\"__.__.____\"\n" +
    "                               id=\"id_calculation_at_date\"\n" +
    "                               required\n" +
    "                               ng-model=\"calculation.calculation_at_date\">\n" +
    "                        <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- step 2 end -->");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_3.html",
    "<!-- step 3 start -->\n" +
    "\n" +
    "<div class=\"css-cars-filter b-full-width-bg m0 mt30\" style=\"font-size: 15px;\">\n" +
    "    <div class=\"p20\">\n" +
    "        <car-filter cf-model-car-mark=\"calculation.car_mark\"\n" +
    "                    cf-model-car-model=\"calculation.car_model\"\n" +
    "                    cf-model-car-model-group=\"calculation.car_model_group\"\n" +
    "                    cf-model-car-cost=\"calculation.car_cost\"></car-filter>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- step 3 end -->");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_4.html",
    "<!-- step 4 start -->\n" +
    "\n" +
    "<div class=\"ui form b-full-width-bg pt55 m0 mt10\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"nowrap css-show-errors ui grid stackable relaxed\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"four wide column\">\n" +
    "                    <div class=\"field mt15\" align=\"left\">\n" +
    "                        <label for=\"id_drivers_count\">\n" +
    "                            Количество водителей:\n" +
    "                        </label>\n" +
    "\n" +
    "                        <div class=\"ui search selection dropdown\"\n" +
    "                             id=\"id_drivers_count\"\n" +
    "                             sem-dropdown\n" +
    "                             ng-model=\"params.drivers_count_full\"\n" +
    "                             ng-class=\"{disabled: calculation.is_legal_entity}\"\n" +
    "                             ng-change=\"driversCountChanged()\"\n" +
    "                             sem-dropdown-items=\"dicts.driversCountOsago\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"twelve wide column b-drivers_osago\">\n" +
    "                    <h3 class=\"b-drivers_osago_person-type b-content_title\"\n" +
    "                        ng-if=\"drivers.length\">\n" +
    "                        <i class=\"icon\" ng-class=\"'user' + (drivers.length > 1 ? 's' : '')\"></i> Водители:\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <div ng-repeat=\"driver in drivers\"\n" +
    "                         ng-form=\"driver_form\"\n" +
    "                         ng-model=\"driver\"\n" +
    "                         class=\"is-form\">\n" +
    "\n" +
    "                        <div class=\"ui grid three column stackable\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_osago_last_name_{{$index}}\">Фамилия:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_driver_osago_last_name_{{$index}}\"\n" +
    "                                               ng-model=\"driver.last_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_osago_first_name_{{$index}}\">Имя:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_driver_osago_first_name_{{$index}}\"\n" +
    "                                               ng-model=\"driver.first_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_osago_patronymic_{{$index}}\">Отчество:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_driver_osago_patronymic_{{$index}}\"\n" +
    "                                               ng-model=\"driver.patronymic\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_license_series\">Водительское удостоверение:</label>\n" +
    "\n" +
    "                                        <div class=\"ui fields\">\n" +
    "                                            <div class=\"seven wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       maxlength=\"4\"\n" +
    "                                                       minlength=\"4\"\n" +
    "                                                       placeholder=\"Серия\"\n" +
    "                                                       id=\"id_driver_license_series\"\n" +
    "                                                       ng-model=\"driver.driver_license.series\"/>\n" +
    "                                            </div>\n" +
    "\n" +
    "                                            <div class=\"nine wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       input-integer\n" +
    "                                                       maxlength=\"6\"\n" +
    "                                                       minlength=\"6\"\n" +
    "                                                       placeholder=\"Номер\"\n" +
    "                                                       id=\"id_driver_license_number\"\n" +
    "                                                       ng-model=\"driver.driver_license.number\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\"\n" +
    "                                         ng-class=\"{error: driver.dateIsInvalid}\">\n" +
    "                                        <label for=\"id_driving_experience_started_{{$index}}\">Дата начала стажа:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(0, 73)}}\"\n" +
    "                                                   jdatepicker-only-past=\"true\"\n" +
    "                                                   ng-change=\"driversDateChanged(driver)\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_driving_experience_started_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"driver.driving_experience_started\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\"\n" +
    "                                         ng-class=\"{error: driver.dateIsInvalid}\">\n" +
    "                                        <label for=\"id_driver_birth_date_{{$index}}\">Дата рождения:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(18, 91)}}\"\n" +
    "                                                   jdatepicker-only-past=\"true\"\n" +
    "                                                   ng-change=\"driversDateChanged(driver);\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_driver_birth_date_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"driver.birth_date\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"ui divider mt30 mb15\"\n" +
    "                             ng-if=\"drivers.length > 1 && (drivers.length - 1) !== $index\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div ng-repeat=\"person in persons\"\n" +
    "                         ng-form=\"person_form\"\n" +
    "                         ng-model=\"person\"\n" +
    "                         class=\"is-form\">\n" +
    "                        <div class=\"ui loader\"></div>\n" +
    "\n" +
    "                        <h3 class=\"b-drivers_osago_person-type b-content_title\">\n" +
    "                            Собственник:\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <div class=\"ui grid four column stackable\"\n" +
    "                             ng-if=\"!calculation.is_legal_entity\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_osago_last_name_{{$index}}\">Фамилия:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_person_osago_last_name_{{$index}}\"\n" +
    "                                               ng-model=\"person.last_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_osago_first_name_{{$index}}\">Имя:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_person_osago_first_name_{{$index}}\"\n" +
    "                                               ng-model=\"person.first_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_osago_patronymic_{{$index}}\">Отчество:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_person_osago_patronymic_{{$index}}\"\n" +
    "                                               ng-model=\"person.patronymic\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_birth_date_{{$index}}\">Дата рождения:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(0, 90)}}\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_person_birth_date_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"person.birth_date\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"six wide column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_passport\">Паспорт:</label>\n" +
    "\n" +
    "                                        <div class=\"ui fields\">\n" +
    "                                            <div class=\"seven wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       input-integer\n" +
    "                                                       maxlength=\"4\"\n" +
    "                                                       minlength=\"4\"\n" +
    "                                                       placeholder=\"Серия\"\n" +
    "                                                       id=\"id_person_passport\"\n" +
    "                                                       ng-model=\"person.passport.series\"/>\n" +
    "                                            </div>\n" +
    "\n" +
    "                                            <div class=\"nine wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       input-integer\n" +
    "                                                       maxlength=\"6\"\n" +
    "                                                       minlength=\"6\"\n" +
    "                                                       placeholder=\"Номер\"\n" +
    "                                                       ng-model=\"person.passport.number\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"four wide column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_passport_issue_date_{{$index}}\">Дата выдачи:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(0, 26)}}\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_person_passport_issue_date_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"person.passport.issue_date\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"six wide column\"\n" +
    "                                     ng-if=\"isVisible('vin_number')\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_vin_number_np\">VIN:</label>\n" +
    "\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-model=\"osagoParams.vin_number\"\n" +
    "                                               input-vin-number\n" +
    "                                               minlength=\"17\"\n" +
    "                                               maxlength=\"17\"\n" +
    "                                               required\n" +
    "                                               id=\"id_vin_number_np\"/>\n" +
    "\n" +
    "                                        <div class=\"ui label pointing basic top grey c-vin-error-label css-can-wrap\" ng-show=\"osagoParams.vin_number.length === 17\">Не совпадает контрольная сумма VIN</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"ui grid three column stackable\" ng-if=\"calculation.is_legal_entity\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\"\n" +
    "                                     ng-if=\"isVisible('vin_number')\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_vin_number\">VIN:</label>\n" +
    "\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-model=\"osagoParams.vin_number\"\n" +
    "                                               input-vin-number\n" +
    "                                               minlength=\"17\"\n" +
    "                                               maxlength=\"17\"\n" +
    "                                               required\n" +
    "                                               id=\"id_vin_number\"/>\n" +
    "\n" +
    "                                        <div class=\"ui label pointing basic top grey c-vin-error-label css-can-wrap\" ng-show=\"osagoParams.vin_number.length === 17\">Не совпадает контрольная сумма VIN</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_legal_person_inn\">ИНН:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               input-integer\n" +
    "                                               id=\"id_legal_person_inn\"\n" +
    "                                               ng-model=\"osagoParams.legal_person.inn\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_legal_person_title\">Наименование юр. лица:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               id=\"id_legal_person_title\"\n" +
    "                                               ng-model=\"osagoParams.legal_person.title\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- step 4 end -->");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_5.html",
    "<div class=\"ui form b-full-width-bg pt35 m0 mt10\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"nowrap css-show-errors ui grid stackable relaxed\">\n" +
    "            <div class=\"four wide column\">\n" +
    "                <div class=\"field\">\n" +
    "                    <label>\n" +
    "                        Количество водителей:\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-click=\"params.field_was_clicked = true;\"\n" +
    "                         ng-focus=\"params.field_was_clicked = true;\"\n" +
    "                         ng-class=\"{disabled: calculation.is_legal_entity}\"\n" +
    "                         ng-change=\"params.field_was_clicked && driversCountChangedSimple()\"\n" +
    "                         ng-model=\"params.drivers_count\"\n" +
    "                         sem-dropdown-items=\"dicts.driversCountOsago\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\">\n" +
    "                <div class=\"field\"\n" +
    "                     ng-repeat=\"driver in calculation.driver_set\">\n" +
    "                    <label>Возраст и стаж водителя:</label>\n" +
    "\n" +
    "                    <div class=\"ui fields\">\n" +
    "                        <div class=\"eight wide field\"\n" +
    "                             ng-class=\"{'error': driver.age < 18 || driver.age > 87}\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   ng-model=\"driver.age\"\n" +
    "                                   input-integer\n" +
    "                                   required/>\n" +
    "                        </div>\n" +
    "                        <div class=\"eight wide field\"\n" +
    "                             ng-class=\"{'error': driver.age - driver.expirience < 18}\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   ng-model=\"driver.expirience\"\n" +
    "                                   input-integer\n" +
    "                                   required/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_6.html",
    "<div class=\"ui form b-full-width-bg_white\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"ui grid stackable four column bottom aligned\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"twelve wide column\">&nbsp;</div>\n" +
    "\n" +
    "                <div class=\"column\" align=\"right\">\n" +
    "                    <div class=\"field\">\n" +
    "                        <button class=\"button ui green\"\n" +
    "                                style=\"margin-right: 0;\"\n" +
    "                                ng-click=\"calculateOsago()\"\n" +
    "                                ng-class=\"{loading: params.isCalculationProgress}\"\n" +
    "                                ng-disabled=\"calculation_form.$invalid || disabledSubmitButton()\"\n" +
    "                                type=\"button\">Рассчитать\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--<div class=\"mt15\">\n" +
    "            <sem-checkbox ng-model=\"calculation.count_years_break_even_insurance\"\n" +
    "                          ng-true-value=\"1\"\n" +
    "                          ng-false-value=\"0\"\n" +
    "                          sem-label=\"Есть страховые случаи\"></sem-checkbox>\n" +
    "        </div>-->\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/person/views/person.html",
    "<h1 class=\"main-content-header\">Данные профиля</h1>\n" +
    "\n" +
    "<div class=\"main-content-body\">\n" +
    "    <form name=\"person_form\" class=\"person_edit-form\" ng-submit=\"savePerson()\">\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"f_policy-driver-last_name-block\">\n" +
    "                <label for=\"id_last_name\" class=\"fp-label\">Фамилия:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.last_name\"\n" +
    "                       class=\"input-text input-sub_medium\"\n" +
    "                       id=\"id_last_name\"\n" +
    "                       name=\"last_name\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-first_name-block\">\n" +
    "                <label for=\"id_first_name\" class=\"fp-label\">Имя:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.first_name\"\n" +
    "                       class=\"input-text input-sub_medium\"\n" +
    "                       id=\"id_first_name\"\n" +
    "                       name=\"first_name\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-patronymic-block\">\n" +
    "                <label for=\"id_patronymic\" class=\"fp-label\">Отчество:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.patronymic\"\n" +
    "                       class=\"input-text input-sub_medium\"\n" +
    "                       id=\"id_patronymic\"\n" +
    "                       name=\"patronymic\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"f_policy-driver-driver_license-block\">\n" +
    "                <label for=\"id_driver_license_series\" class=\"fp-label\">Водительское удостоверение:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.driver_license.series\"\n" +
    "                       class=\"input-text input-nano\"\n" +
    "                       maxlength=\"4\"\n" +
    "                       id=\"id_driver_license_series\"\n" +
    "                       name=\"driver_license_series\"\n" +
    "                       required/>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.driver_license.number\"\n" +
    "                       class=\"input-text input-small\"\n" +
    "                       maxlength=\"6\"\n" +
    "                       id=\"id_driver_license_number\"\n" +
    "                       name=\"driver_license_number\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-driver_license_date-block\">\n" +
    "                <label for=\"id_driver_license_date_{{$index}}\" class=\"fp-label\">Дата получения прав:</label>\n" +
    "                        <span class=\"input-date-wrap\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   jdatepicker\n" +
    "                                   jdatepicker-year-count=\"90\"\n" +
    "                                   ng-model=\"person.driver_license.issue_date\"\n" +
    "                                   class=\"input-date input-mini\"\n" +
    "                                   id=\"id_driver_license_date_{{$index}}\"\n" +
    "                                   name=\"driver_license_date\"\n" +
    "                                   required/>\n" +
    "                             <i class=\"icon-calendar\"></i>\n" +
    "                        </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-birth_date-block\">\n" +
    "                <label for=\"id_birth_date_{{$index}}\" class=\"fp-label\">Дата рождения:</label>\n" +
    "                        <span class=\"input-date-wrap\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   jdatepicker\n" +
    "                                   jdatepicker-year-count=\"90\"\n" +
    "                                   ng-model=\"person.birth_date\"\n" +
    "                                   class=\"input-date input-mini\"\n" +
    "                                   id=\"id_birth_date_{{$index}}\"\n" +
    "                                   name=\"birth_date\"\n" +
    "                                   required/>\n" +
    "                            <i class=\"icon-calendar\"></i>\n" +
    "                        </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"f_policy-driver-passport-block\">\n" +
    "                <label for=\"id_passport_series\" class=\"fp-label\">Серия, номер паспорта:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       input-integer\n" +
    "                       ng-model=\"person.passport.series\"\n" +
    "                       class=\"input-text input-nano\"\n" +
    "                       maxlength=\"4\"\n" +
    "                       id=\"id_passport_series\"\n" +
    "                       name=\"passport_series\"\n" +
    "                       required/>\n" +
    "                <input type=\"text\"\n" +
    "                       input-integer\n" +
    "                       ng-model=\"person.passport.number\"\n" +
    "                       class=\"input-text input-small\"\n" +
    "                       maxlength=\"6\"\n" +
    "                       id=\"id_passport_number\"\n" +
    "                       name=\"passport_number\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-passport_point-block\">\n" +
    "                <label for=\"id_passport_point\" class=\"fp-label\">Кем выдан:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.passport.issue_point\"\n" +
    "                       class=\"input-text input-big\"\n" +
    "                       id=\"id_passport_point\"\n" +
    "                       name=\"passport_point\"/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-passport_date-block\">\n" +
    "                <label for=\"id_passport_date_{{$index}}\" class=\"fp-label\">Дата выдачи:</label>\n" +
    "                        <span class=\"input-date-wrap\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   jdatepicker\n" +
    "                                   jdatepicker-year-count=\"90\"\n" +
    "                                   ng-model=\"person.passport.issue_date\"\n" +
    "                                   class=\"input-date input-mini\"\n" +
    "                                   id=\"id_passport_date_{{$index}}\"\n" +
    "                                   name=\"passport_date\"\n" +
    "                                   required/>\n" +
    "                            <i class=\"icon-calendar\"></i>\n" +
    "                        </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "\n" +
    "            <div class=\"f_policy-driver-address-block\">\n" +
    "                <div class=\"f_policy-driver-address_registration-block\">\n" +
    "                    <label for=\"id_address_registration_postal_index\" class=\"fp-label\">Адрес регистрации:</label>\n" +
    "\n" +
    "                    <div class=\"input-wrapper\">\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.postal_index\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"индекс\"\n" +
    "                               maxlength=\"6\"\n" +
    "                               id=\"id_address_registration_postal_index\"\n" +
    "                               name=\"address_registration_postal_index\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.city\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"город\"\n" +
    "                               id=\"id_address_registration_city\"\n" +
    "                               name=\"address_registration_city\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.street\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"улица\"\n" +
    "                               id=\"id_address_registration_street\"\n" +
    "                               name=\"address_registration_street\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.house\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"дом\"\n" +
    "                               id=\"id_address_registration_house\"\n" +
    "                               name=\"address_registration_house\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.housing\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"корп.\"\n" +
    "                               id=\"id_address_registration_housing\"\n" +
    "                               name=\"address_registration_housing\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.flat\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"кв.\"\n" +
    "                               id=\"id_address_registration_flat\"\n" +
    "                               name=\"address_registration_flat\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"f_policy-driver-address_residential-block\" ng-if=\"!person.is_same_address\">\n" +
    "                    <label for=\"id_address_residential_postal_index\" class=\"fp-label\">Адрес проживания:</label>\n" +
    "\n" +
    "                    <div class=\"input-wrapper\">\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.postal_index\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"индекс\"\n" +
    "                               maxlength=\"6\"\n" +
    "                               id=\"id_address_residential_postal_index\"\n" +
    "                               name=\"address_residential_postal_index\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.city\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"город\"\n" +
    "                               id=\"id_address_residential_city\"\n" +
    "                               name=\"address_residential_city\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.street\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"улица\"\n" +
    "                               id=\"id_address_residential_street\"\n" +
    "                               name=\"address_residential_street\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.house\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"дом\"\n" +
    "                               id=\"id_address_residential_house\"\n" +
    "                               name=\"address_residential_house\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.housing\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"корп.\"\n" +
    "                               id=\"id_address_residential_housing\"\n" +
    "                               name=\"address_residential_housing\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.flat\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"кв.\"\n" +
    "                               id=\"id_address_residential_flat\"\n" +
    "                               name=\"address_residential_flat\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-is_same_address-block\">\n" +
    "                <div class=\"sub-block\">\n" +
    "                    <input type=\"checkbox\"\n" +
    "                           ng-model=\"person.is_same_address\"\n" +
    "                           class=\"checkbox\"\n" +
    "                           id=\"id_is_same_address\"\n" +
    "                           name=\"is_same_address\"/>\n" +
    "                    <label for=\"id_is_same_address\">Совпадает с фактическим</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-actions\">\n" +
    "            <button type=\"submit\"\n" +
    "                    ng-disabled=\"isSavePersonProgress\"\n" +
    "                    class=\"button person-submit\">\n" +
    "                Сохранить\n" +
    "                <i class=\"icon-done\"></i>\n" +
    "            </button>\n" +
    "            <div loading-spinner=\"isSavePersonProgress\" class=\"calc-loading\"></div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>    \n" +
    "");
  $templateCache.put("js/src/modules/person/views/person.save_message.success.html",
    "<form name=\"person_message_success\" class=\"formation_policy_message-form ngdialog-form\" ng-submit=\"closeThisDialog()\">\n" +
    "    <div class=\"ngdialog-message\">\n" +
    "        Персона сохранена\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-actions\">\n" +
    "        <button type=\"submit\"\n" +
    "                class=\"button person_message_success-submit-button\">\n" +
    "            Ок\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_group_models_list.html",
    "<!-- CAR GROUP MODEL BEGIN -->\n" +
    "<div class=\"c-tac b-content-loading\" ng-if=\"!carModelGroups || !carModelGroups.length\">\n" +
    "    <i class=\"spinner loading icon big grey\" tabindex=\"0\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui five column doubling grid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"column ui list\"\n" +
    "             ng-repeat=\"column in carModelGroups | carFilterYears: carManufacturingYear | orderBy:'rank':reverse | orderBy:orderBy | multiColumn:{columns: 5}\">\n" +
    "            <div ng-repeat=\"carModelGroup in column\"\n" +
    "                 class=\"item css-car-item\"\n" +
    "                 tabindex=\"0\"\n" +
    "                 ng-click=\"selectCarModelGroup(carModelGroup)\"\n" +
    "                 ng-keypress=\"$event.keyCode == 13 && selectCarModelGroup(carModelGroup)\"\n" +
    "                 title=\"{{carModelGroup.title}}\">\n" +
    "                <span ng-bind=\"carModelGroup.title\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- CAR MODEL END -->");
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_manufacturing_years.html",
    "<!-- START car-manufacturing-years directive -->\n" +
    "\n" +
    "<div class=\"ui labels\">\n" +
    "    <button class=\"ui large label basic\"\n" +
    "            type=\"button\"\n" +
    "            ng-repeat=\"year in monYears | limitTo: 10\"\n" +
    "            tabindex=\"0\"\n" +
    "            ng-class=\"{\n" +
    "              'blue': year == calculation.car_manufacturing_year\n" +
    "            }\"\n" +
    "            ng-click=\"selectMonYear($index)\">\n" +
    "        <span ng-bind=\"year\"></span>\n" +
    "    </button>\n" +
    "\n" +
    "    <div style=\"display: inline-block;\" class=\"nowrap\">\n" +
    "        <label class=\"ml15\">Другой:</label>\n" +
    "\n" +
    "        <div style=\"display: inline-block;\">\n" +
    "\n" +
    "            <div class=\"ui form\">\n" +
    "                <div class=\"field\" style=\"width: 90px;\">\n" +
    "                    <div sem-dropdown-items=\"monYears\"\n" +
    "                         class=\"ui compact selection dropdown\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-focus=\"carFilterParams.was_clicked = true;\"\n" +
    "                         ng-click=\"carFilterParams.was_clicked = true;\"\n" +
    "                         ng-change=\"carFilterParams.was_clicked && selectMonYear()\"\n" +
    "                         sem-dropdown-placeholder=\"2016\"\n" +
    "                         sem-dropdown-simple=\"true\"\n" +
    "                         ng-model=\"calculation.car_manufacturing_year\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- END car-manufacturing-years directive -->");
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_marks_list.html",
    "<div class=\"c-tac b-content-loading\" ng-if=\"!carMarks || !carMarks.length\">\n" +
    "    <i class=\"spinner loading icon big grey\" tabindex=\"0\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui six column doubling grid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"column ui list\"\n" +
    "             ng-repeat=\"column in carMarks | filter:$parent.carSearch | filter:filterByPopularity | limitTo:carMarksLimit | orderBy:orderBy | multiColumn:{columns: 6}\">\n" +
    "            <div ng-repeat=\"carMark in column\"\n" +
    "                 class=\"item css-car-item\"\n" +
    "                 title=\"{{carMark.title}}\"\n" +
    "                 tabindex=\"0\"\n" +
    "                 ng-class=\"{\n" +
    "                   'css-item-selected': carMarkSelected === carMark\n" +
    "                 }\"\n" +
    "                 ng-keypress=\"$event.keyCode == 13 && selectCarMark(carMark)\"\n" +
    "                 ng-click=\"selectCarMark(carMark)\">\n" +
    "                <span ng-bind=\"::carMark.title\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div style=\"position: relative;z-index: 2;\" class=\"c-tar\">\n" +
    "    <a href=\"\"\n" +
    "       class=\"car_filter-car_marks-all_marks_link p20   \"\n" +
    "       ng-click=\"toggleAllMarks()\">\n" +
    "        <span ng-if=\"carMarksLimit === limit\">Все марки</span>\n" +
    "        <span ng-if=\"carMarksLimit !== limit\">Закрыть</span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "<!-- CAR MARKS END -->");
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_models_list.html",
    "<!-- CAR MODEL BEGIN -->\n" +
    "<div class=\"c-tac b-content-loading\" ng-if=\"!carModels || !carModels.length\">\n" +
    "    <i class=\"spinner loading icon big grey\" tabindex=\"0\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui five column doubling grid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"column ui list\"\n" +
    "             ng-repeat=\"column in carModels | carFilterYears:carManufacturingYear | orderBy:'rank':reverse | orderBy:orderBy | multiColumn:{columns: 5}\">\n" +
    "            <div ng-repeat=\"carModel in column\"\n" +
    "                 class=\"item css-car-item\"\n" +
    "                 tabindex=\"0\"\n" +
    "                 ng-keypress=\"$event.keyCode == 13 && selectCarModel(carModel, true)\"\n" +
    "                 ng-click=\"selectCarModel(carModel, true)\"\n" +
    "                 ng-class=\"{\n" +
    "                   'css-item-selected': selectedModelId === carModel.id\n" +
    "                 }\"\n" +
    "                 title=\"{{carModel.title}}\">\n" +
    "                <span ng-bind=\"carModel.title\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- CAR MODEL END -->");
  $templateCache.put("js/src/modules/carFilter/views/car_filter.html",
    "<!-- The group models are here -->\n" +
    "<style>\n" +
    "    .c-hidden {\n" +
    "        display: none;\n" +
    "    }\n" +
    "\n" +
    "    .b-calc-step--year .show-active-year,\n" +
    "    .b-calc-step--car .show-active-car,\n" +
    "    .b-calc-step--car_mark .show-active-car_mark,\n" +
    "    .b-calc-step--car_group_model .show-active-car_group_model,\n" +
    "    .b-calc-step--car_model .show-active-car_model,\n" +
    "    .b-calc-step--engine_power .show-active-engine_power,\n" +
    "    .b-calc-step--owner_registration .show-active-owner_registration,\n" +
    "    .b-calc-step--calculation_type .show-active-calculation_type,\n" +
    "    .b-calc-step--drivers .show-active-drivers {\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "    i.icon.delete:focus {\n" +
    "        color: #fff;\n" +
    "        opacity: 1 !important;\n" +
    "        outline: none;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"ui form b-calc-step\" ng-class=\"'b-calc-step--' + getActiveStep().name\">\n" +
    "    <div ng-show=\"getActiveStep().name !== 'year'\">\n" +
    "        <div class=\"ui branded large labels\">\n" +
    "            <div class=\"ui  label basic\">\n" +
    "                <span ng-bind=\"calculation.car_manufacturing_year\"></span> г.в.\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('year')\"\n" +
    "                   ng-click=\"setActiveStep('year')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"selectedCarMark.title\">\n" +
    "                <span ng-bind=\"selectedCarMark.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-click=\"setCarStep(1)\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(1)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"selectedCarModelGroup.title\">\n" +
    "                <span ng-bind=\"selectedCarModelGroup.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(2)\"\n" +
    "                   ng-click=\"setCarStep(2)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"selectedCarModel.title\">\n" +
    "                <span ng-bind=\"selectedCarModel.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(3)\"\n" +
    "                   ng-click=\"setCarStep(3)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"calculation.engine_power\">\n" +
    "                <span ng-bind=\"calculation.engine_power\"></span> л.с.\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('engine_power')\"\n" +
    "                   ng-click=\"setActiveStep('engine_power');\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"calculation.owner_registration\">\n" +
    "                <span ng-bind=\"carFilterParams.owner_registration_title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('owner_registration')\"\n" +
    "                   ng-click=\"setActiveStep('owner_registration');\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"p20\">\n" +
    "            <div class=\"ui divider\" style=\"border-top-style: dashed;\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-year\">\n" +
    "        <div class=\"mb10\">\n" +
    "            <strong>Год выпуска автомобиля:</strong>\n" +
    "        </div>\n" +
    "\n" +
    "        <car-manufacturing-years></car-manufacturing-years>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-car\">\n" +
    "        <div class=\"calculator-caption calculator-caption-model mb15\">\n" +
    "            <div ng-if=\"carFilterStep === 1\" class=\"pos-rel\">\n" +
    "                <b>Выберите марку:</b>\n" +
    "\n" +
    "                <label class=\"b-car-search\">\n" +
    "                    <div class=\"ui icon input transparent\">\n" +
    "                        <input type=\"text\" placeholder=\"Найти\" ng-model=\"carSearch.title\"/>\n" +
    "                        <i class=\"icon search\"></i>\n" +
    "                    </div>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <b ng-if=\"carFilterStep > 1\">\n" +
    "                <b ng-if=\"carFilterStep === 2\">Выберите модель —</b>\n" +
    "                <b ng-if=\"carFilterStep === 3\">Выберите модификацию —</b>\n" +
    "                {{selectedCarMark.title}} <span ng-if=\"!selectedCarModel.title\">{{selectedCarModelGroup.title}} </span> <span ng-if=\"selectedCarModel.title\">{{selectedCarModel.title}}</span>:\n" +
    "            </b>\n" +
    "\n" +
    "            <!--<a href=\"\"\n" +
    "               ng-if=\"carFilterStep > 1\"\n" +
    "               class=\"change-selected_car\"\n" +
    "               ng-click=\"goBack()\">Изменить</a>-->\n" +
    "        </div>\n" +
    "\n" +
    "        <div car-marks-list\n" +
    "             style=\"clear: both;\"\n" +
    "             ng-model=\"calculation.car_mark\"\n" +
    "             limit=\"56\"\n" +
    "             ng-show=\"carFilterStep === 1\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div car-group-models-list\n" +
    "             style=\"clear: both;\"\n" +
    "             ng-if=\"carFilterStep === 2 && !selectedCar.carModel.id\"\n" +
    "             ng-model=\"calculation.car_model_group\"\n" +
    "             car-manufacturing-year=\"calculation.car_manufacturing_year\"\n" +
    "             car-mark-id=\"modelCarMark\">\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div car-models-list\n" +
    "             style=\"clear: both;\"\n" +
    "             ng-if=\"carFilterStep >= 3 && !selectedCar.carModel.id\"\n" +
    "             ng-model=\"calculation.car_model\"\n" +
    "             car-mark-id=\"modelCarMark\"\n" +
    "             car-manufacturing-year=\"calculation.car_manufacturing_year\"\n" +
    "             car-model-group-id=\"calculation.car_model_group\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-engine_power\">\n" +
    "        <div class=\"fields\">\n" +
    "            <div class=\"five wide field\">\n" +
    "                <label for=\"id_engine_power\">Выберите мощность двигателя, л.с.:</label>\n" +
    "\n" +
    "                <input type=\"text\"\n" +
    "                       ng-class=\"{'is-invalid-calc': carFilterParams.engine_power < 10 || carFilterParams.engine_power > 999}\"\n" +
    "                       ng-model=\"carFilterParams.engine_power\"\n" +
    "                       input-only=\"[0-9]{1,3}\"\n" +
    "                       placeholder=\"0\"\n" +
    "                       class=\"input-has-slider\"\n" +
    "                       required\n" +
    "                       id=\"id_engine_power\"/>\n" +
    "\n" +
    "                <div input-slider\n" +
    "                     default-min=\"70\"\n" +
    "                     slider-step=\"1\"\n" +
    "                     default-max=\"500\"\n" +
    "                     ng-model=\"carFilterParams.engine_power\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"eleven wide field c-tar\">\n" +
    "                <label>&nbsp;</label>\n" +
    "                <button type=\"button\"\n" +
    "                        ng-click=\"enginePowerNext()\"\n" +
    "                        ng-disabled=\"!carFilterParams.engine_power\"\n" +
    "                        class=\"ui button branded\">Далее</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-owner_registration\">\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">Выберите регион регистрации собственника:</h3>\n" +
    "\n" +
    "        <div class=\"ui grid stackable\">\n" +
    "            <div class=\"twelve wide column\"\n" +
    "                 ng-show=\"!carFilterParams.ownerRegistrationViewIsFull\">\n" +
    "                <h3 class=\"b-content_title p20 m0\">\n" +
    "                    <a href=\"\"\n" +
    "                       ng-repeat=\"item in mainRegions\"\n" +
    "                       ng-click=\"selectOwnerRegistration(item.id)\"\n" +
    "                       ng-bind=\"item.title\"\n" +
    "                       ng-class=\"{'css-bottom-dashed--active': item.id == carFilterParams.owner_registration}\"\n" +
    "                       class=\"mr25 css-bottom-dashed\"></a>\n" +
    "\n" +
    "                    <a href=\"\" ng-click=\"toggleOwnerRegistrationView()\" ng-if=\"!carFilterParams.owner_registration_all_are_hidden\">другой</a>\n" +
    "                </h3>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\" ng-show=\"carFilterParams.ownerRegistrationViewIsFull\">\n" +
    "                <div class=\"p20 field\">\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_owner_registration\"\n" +
    "                         ng-focus=\"carFilterParams.was_clicked = true;\"\n" +
    "                         ng-click=\"carFilterParams.was_clicked = true;\"\n" +
    "                         sem-dropdown\n" +
    "                         sem-dropdown-placeholder=\"Не выбран\"\n" +
    "                         ng-model=\"carFilterParams.owner_registration\"\n" +
    "                         ng-change=\"carFilterParams.was_clicked && selectOwnerRegistration()\"\n" +
    "                         sem-dropdown-items=\"ownerRegistration\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"seven wide column\" ng-show=\"carFilterParams.ownerRegistrationViewIsFull\">&nbsp;</div>\n" +
    "\n" +
    "            <!--<div class=\"four wide column c-tar\">\n" +
    "                <button class=\"ui button green\"\n" +
    "                        ng-click=\"ownerRegistrationNext()\"\n" +
    "                        type=\"button\">Далее</button>\n" +
    "            </div>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-calculation_type\">\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">Тип расчета ОСАГО:</h3>\n" +
    "\n" +
    "        <h3 class=\"b-content_title p20 m0\">\n" +
    "            <a href=\"\"\n" +
    "               ng-repeat=\"item in calcTypes\"\n" +
    "               ng-click=\"setCalculationType(item.id)\"\n" +
    "               ng-bind=\"item.title\"\n" +
    "               ng-class=\"{'css-bottom-dashed--active': item.id == carFilterParams.calculation_type}\"\n" +
    "               class=\"mr25 css-bottom-dashed\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("js/src/modules/appMessage/views/messages_template.html",
    "<div class=\"b-messages\">\n" +
    "    <div ng-repeat=\"message in $root.messages\"\n" +
    "         ng-class=\"message.type\"\n" +
    "         class=\"b-messages_item ui message\">\n" +
    "\n" +
    "        <i class=\"icon close\" ng-click=\"message.close()\"></i>\n" +
    "\n" +
    "        <div ng-if=\"!message.isList\"\n" +
    "             compile=\"message.msg\"></div>\n" +
    "\n" +
    "        <ul class=\"list\" ng-if=\"message.isList\">\n" +
    "            <li ng-repeat=\"msg in message.msg\">\n" +
    "                <span ng-bind-html=\"msg\"></span>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/AddingDocuments/views/adding_documents.html",
    "<div ng-include=\"templates.navigation\"></div>\n" +
    "\n" +
    "<div class=\"mt30\">\n" +
    "    <form name=\"f_policy_step_3_form\" class=\"f_policy_step_3-form\">\n" +
    "        <div ng-class=\"{'b-disabled-block': isNotUpload}\">\n" +
    "            <div class=\"ui grid stackable\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"six wide column\">\n" +
    "                        <ul class=\"uploader-queue\"\n" +
    "                            nv-file-drop\n" +
    "                            nv-file-over\n" +
    "                            uploader=\"uploader\"\n" +
    "                            over-class=\"uploader-queue_over\">\n" +
    "\n" +
    "                            <li ng-if=\"!uploader.queue.length\">\n" +
    "                                Для продолжения работы нужно загрузить файлы.\n" +
    "                            </li>\n" +
    "\n" +
    "                            <!-- NEW UPLOADED IMAGES -->\n" +
    "                            <li ng-repeat=\"item in uploader.queue\" class=\"list-item animation-fade\">\n" +
    "                                <div ng-if=\"item._file.type.indexOf('image/') !== -1\">\n" +
    "                                    <div ng-thumb=\"{ file: item._file, height: 70 }\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div ng-if=\"item._file.type === 'application/pdf'\">\n" +
    "                                    <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                                        <img ng-src=\"{{params.images_path}}pdf.png\" alt=\"{{item.description}}\"\n" +
    "                                             height=\"70\"/>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div ng-if=\"item._file.type === 'application/msword' || isDocument(item._file.type)\">\n" +
    "                                    <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                                        <img ng-src=\"{{params.images_path}}doc_icon.png\" alt=\"{{item.description}}\"\n" +
    "                                             height=\"70\"/>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"uploader-queue-actions\">\n" +
    "                                    <button type=\"button\"\n" +
    "                                            ng-click=\"item.remove()\"\n" +
    "                                            class=\"button button-wrong\">Удалить\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <div class=\"control-row\">\n" +
    "                            <input type=\"file\"\n" +
    "                                   nv-file-select\n" +
    "                                   class=\"ui button\"\n" +
    "                                   name=\"file\"\n" +
    "                                   style=\"width: 100%;\"\n" +
    "                                   uploader=\"uploader\"\n" +
    "                                   multiple/>\n" +
    "                            <h4>Выбрано: {{uploader.queue.length}}</h4>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"ten wide column\">\n" +
    "                        <h2 class=\"b-content_title m0\">Подтверждаю загрузку минимального пакета документов</h2>\n" +
    "\n" +
    "                        <div class=\"b-full-width-bg\" style=\"padding: 15px 0;margin-left: -15px;\">\n" +
    "                            <div class=\"p20\">\n" +
    "                                Для заполнения полиса добавьте сканы или фотографии ваших документов. Мы внесем эти данные и проверим их самостоятельно.\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"b-uploader_confirmation-list\">\n" +
    "                            <div class=\"list-item\">\n" +
    "                                <sem-checkbox ng-model=\"confirmationList.id_is_1\"\n" +
    "                                              sem-label=\"Копия паспорта Страхователя (1 лист и лист с пропиской)\"\n" +
    "                                              required=\"required\"\n" +
    "                                              id=\"id_is_1\"\n" +
    "                                              name=\"is_1\">\n" +
    "                                </sem-checkbox>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"list-item\">\n" +
    "                                <sem-checkbox ng-model=\"confirmationList.id_is_2\"\n" +
    "                                              sem-label=\"Копия паспорта Собственника (1 лист и лист с пропиской)\"\n" +
    "                                              required=\"required\"\n" +
    "                                              id=\"id_is_2\"\n" +
    "                                              name=\"is_2\">\n" +
    "                                </sem-checkbox>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"list-item\">\n" +
    "                                <sem-checkbox ng-model=\"confirmationList.id_is_4\"\n" +
    "                                              sem-label=\"Копия ПТС или свидетельство о регистрации (с двух сторон)\"\n" +
    "                                              required=\"required\"\n" +
    "                                              id=\"id_is_4\"\n" +
    "                                              name=\"is_4\">\n" +
    "                                </sem-checkbox>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"list-item\">\n" +
    "                                <sem-checkbox ng-model=\"confirmationList.id_is_7\"\n" +
    "                                              sem-label=\"Копия вод. удостоверений с обеих сторон всех водителей\"\n" +
    "                                              required=\"required\"\n" +
    "                                              id=\"id_is_7\"\n" +
    "                                              name=\"is_7\">\n" +
    "                                </sem-checkbox>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"mt15\">\n" +
    "            <sem-checkbox ng-model=\"isNotUpload\"\n" +
    "                          sem-label=\"Документы передаются в бумажной форме\"\n" +
    "                          id=\"id_is_not_upload\"\n" +
    "                          name=\"is_not_upload\">\n" +
    "            </sem-checkbox>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-actions mt20 c-tar\">\n" +
    "            <a ui-sref=\"index.ordering\"\n" +
    "               ng-class=\"{loading: isSaveDataProgress, disabled: !isNotUpload && (f_policy_step_3_form.$invalid || !uploader.queue.length)}\"\n" +
    "               class=\"ui branded button\">\n" +
    "                Далее\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"mt40\" ng-if=\"errors.length\">\n" +
    "            <div class=\"ui error message\">\n" +
    "                <ul class=\"list\">\n" +
    "                    <li ng-repeat=\"error in errors\" ng-if=\"errors.length > 0\"><span ng-bind=\"error\"></span></li>\n" +
    "                </ul>\n" +
    "                <i class=\"close icon\" ng-click=\"errors.length = 0;\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "    .b-uploader_confirmation-list .list-item {\n" +
    "        margin-bottom: 0.5em;\n" +
    "    }\n" +
    "</style>");
  $templateCache.put("js/src/modules/mainContent/views/main_content.html",
    "<div ui-view></div>\n" +
    "\n" +
    "<div align=\"right\" class=\"mt20 mr15\">\n" +
    "    Разработка и поддержка <a href=\"http://b2bpolis.ru\" target=\"_blank\">Умный полис</a>\n" +
    "</div>\n" +
    "\n" +
    "<!-- BEGIN: MESSAGES -->\n" +
    "<messages></messages>\n" +
    "<!-- END: MESSAGES -->\n" +
    "");
  $templateCache.put("js/src/modules/policyOrdering/views/policy_ordering.html",
    "<div ng-include=\"templates.navigation\"></div>\n" +
    "\n" +
    "<div class=\"b-ordering\">\n" +
    "    <div class=\"ui grid stackable\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"eleven wide column\">\n" +
    "                <div class=\"b-ordering-block b-full-width-bg b-full-width-bg--green p30\" ng-if=\"carInfo.carMark\">\n" +
    "                    <h3 class=\"b-content_title m0\">Автомобиль</h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title p20 mt10\">\n" +
    "                        <strong>\n" +
    "                            <span ng-bind=\"carInfo.carMark.title\"></span>\n" +
    "                            <span ng-bind=\"carInfo.carModelGroup.title\"></span>\n" +
    "                            <span ng-bind=\"carInfo.carModel.title\"></span> —\n" +
    "                            <span ng-bind=\"calculation.car_manufacturing_year\"></span> г. выпуска,\n" +
    "                            <span ng-bind=\"calculation.engine_power\"></span> л.с.\n" +
    "                        </strong>\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title mt30\">Водители:</h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title p20 mt10\">\n" +
    "                        <div ng-repeat=\"driver in calculation.driver_set\">\n" +
    "                            <strong>Возраст - <span ng-bind=\"driver.age\"></span>, стаж - <span ng-bind=\"driver.expirience\"></span></strong>\n" +
    "                        </div>\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <div class=\"b-ordering-block_icon\">\n" +
    "                        <i class=\"icon info\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\">\n" +
    "                <div class=\"b-full-width-bg b-ordering-block b-full-width-bg--red\" ng-if=\"calculationResult[0]\">\n" +
    "                    <h3 class=\"b-content_title m0\">Выбранный страховой продукт:</h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title c-tar m0 mt10\">\n" +
    "                        <div class=\"b-ordering_ins-company\">\n" +
    "                            <strong ng-bind=\"selectedResult.insurance_company.title\"></strong>\n" +
    "                        </div>\n" +
    "                        <div class=\"mt5 b-ordering_price\">\n" +
    "                            <strong>\n" +
    "                                <span ng-bind=\"selectedResult.program.sum | priceFormatter:0:'':false\"></span>.<small ng-bind=\"selectedResult.program.sum | fractionalFormatter:2\"></small> р.\n" +
    "                            </strong>\n" +
    "                        </div>\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <div class=\"b-ordering-block_icon\">\n" +
    "                        <i class=\"icon calculator\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"eleven wide column\">\n" +
    "                <div class=\"b-full-width-bg b-ordering-block b-ordering-block--form\">\n" +
    "                    <h3 class=\"b-content_title m0 mb20\">Введите данные для оформления заказа:</h3>\n" +
    "\n" +
    "                    <form name=\"ordering_form\">\n" +
    "                        <div class=\"ui form\">\n" +
    "                            <div class=\"ui grid stackable two column\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label>Ваше имя:</label>\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   ng-model=\"formFields.client_name\"\n" +
    "                                                   required/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label>Ваш телефон:</label>\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   ui-mask=\"+7 (999) 999-9999\"\n" +
    "                                                   required\n" +
    "                                                   placeholder=\"+7 (___) ___-____\"\n" +
    "                                                   ng-model=\"formFields.client_phone\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label>Способ оплаты:</label>\n" +
    "\n" +
    "                                            <div class=\"ui search selection dropdown\"\n" +
    "                                                 id=\"id_owner_registration\"\n" +
    "                                                 sem-dropdown\n" +
    "                                                 ng-model=\"formFields.payment_type\"\n" +
    "                                                 sem-dropdown-simple=\"true\"\n" +
    "                                                 sem-dropdown-items=\"paymentType\"></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row one column\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"mt10\">\n" +
    "                                            <sem-checkbox ng-model=\"formFields.receipt_type\"\n" +
    "                                                          sem-label=\"Бесплатная доставка в течение 2-х дней\"\n" +
    "                                                          sem-type=\"radio\"\n" +
    "                                                          class=\"mr25\"\n" +
    "                                                          name=\"receipt_type\"\n" +
    "                                                          value=\"delivery\"></sem-checkbox>\n" +
    "\n" +
    "                                            <sem-checkbox ng-model=\"formFields.receipt_type\"\n" +
    "                                                          sem-label=\"Оформление в офисе\"\n" +
    "                                                          sem-type=\"radio\"\n" +
    "                                                          name=\"receipt_type\"\n" +
    "                                                          value=\"office\"></sem-checkbox>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"ui grid\"\n" +
    "                                 ng-if=\"formFields.receipt_type === 'delivery'\">\n" +
    "                                <div class=\"row one column pt0\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label for=\"id_delivery_address\">Адрес доставки:</label>\n" +
    "\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   required\n" +
    "                                                   id=\"id_delivery_address\"\n" +
    "                                                   ng-model=\"formFields.delivery_address\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row two column pt0\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\"\n" +
    "                                             ng-class=\"{error: formFields.delivery_date && ordering_form.delivery_date.$invalid}\">\n" +
    "                                            <label for=\"id_delivery_date\">Дата доставки:</label>\n" +
    "\n" +
    "                                            <div class=\"ui icon input\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       jdatepicker\n" +
    "                                                       jdatepicker-year-range=\"{{getYearRange(0, 0)}}\"\n" +
    "                                                       jdatepicker-only-future=\"true\"\n" +
    "                                                       name=\"delivery_date\"\n" +
    "                                                       placeholder=\"__.__.____\"\n" +
    "                                                       id=\"id_delivery_date\"\n" +
    "                                                       required\n" +
    "                                                       ng-model=\"formFields.delivery_date\">\n" +
    "                                                <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label for=\"id_delivery_time\">Время доставки:</label>\n" +
    "\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"formFields.delivery_time\"\n" +
    "                                                   id=\"id_delivery_time\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"ui grid\"\n" +
    "                                 ng-if=\"formFields.receipt_type === 'office'\">\n" +
    "                                <div class=\"row two column pt0\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\"\n" +
    "                                             ng-class=\"{error: formFields.arrival_date && ordering_form.arrival_date.$invalid}\">\n" +
    "                                            <label for=\"id_arrival_date\">Дата оформления:</label>\n" +
    "\n" +
    "                                            <div class=\"ui icon input\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       jdatepicker\n" +
    "                                                       jdatepicker-year-range=\"{{getYearRange(0, 0)}}\"\n" +
    "                                                       jdatepicker-only-future=\"true\"\n" +
    "                                                       name=\"arrival_date\"\n" +
    "                                                       placeholder=\"__.__.____\"\n" +
    "                                                       id=\"id_arrival_date\"\n" +
    "                                                       required\n" +
    "                                                       ng-model=\"formFields.arrival_date\">\n" +
    "                                                <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label for=\"id_arrival_time\">Время оформления:</label>\n" +
    "\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"formFields.arrival_time\"\n" +
    "                                                   id=\"id_arrival_time\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"b-ordering-block_send c-tar mt40\" ng-hide=\"true\">\n" +
    "                            <button class=\"ui branded green\" type=\"button\" disabled>Заказать полис</button>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "\n" +
    "                    <div class=\"b-ordering-block_icon\">\n" +
    "                        <i class=\"icon write\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\">\n" +
    "                <div class=\"b-ordering-block_submit b-full-width-bg b-ordering-block b-full-width-bg--grey\">\n" +
    "                    <button type=\"button\"\n" +
    "                            ng-click=\"sendPolicyOrdering()\"\n" +
    "                            ng-class=\"{loading: policyOrderingInProgress}\"\n" +
    "                            ng-disabled=\"ordering_form.$invalid || policyOrderingInProgress\"\n" +
    "                            class=\"ui button branded nowrap\">Заказать полис</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
