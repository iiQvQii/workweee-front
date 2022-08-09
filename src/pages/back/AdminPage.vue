<template>
  <q-page class="flex flex-center column">
    <h4>{{ $t('my_info') }}</h4>
    <div class="q-pa-md" style="min-width: 500px">
      <q-form class="q-gutter-md " autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false"
        @submit.prevent="submit">
        <q-input outlined v-model="form.name" :label="isHelper ? $t('name') + '*' : $t('host_name') + '*'"
          :rules="rules.name">
        </q-input>
        {{ idxZip.city }}
        {{ idxZip.district }}
        <q-select v-if="isHelper" outlined v-model="form.gender" :options="genderOptions" :label="$t('gender') + '*'"
          emit-value :display-value="$t(gender)" lazy-rules :rules="rules.required" />
        <q-input v-if="isHelper" filled v-model="form.birth" mask="date" :rules="['date']" :label="$t('birthday')">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="birth">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input outlined v-model="form.tel" :label="$t('tel')" :rules="rules.tel">
        </q-input>
        <q-input outlined v-model="form.mobile" :label="$t('mobile') + '*'" :rules="rules.mobile">
        </q-input>
        <q-input outlined v-model="form.email" :label="$t('email') + '*'" :rules="rules.email">
        </q-input>
        <q-select outlined v-model="form.city" :options="cityOptions" :label="$t('city') + '*'" emit-value lazy-rules
          :rules="rules.required">
        </q-select>
        <!-- 區 -->
        <q-select outlined v-model="form.district" :options="districtOptions" :label="$t('district') + '*'" emit-value
          :rules="rules.required">
        </q-select>
        <!-- 詳細地址 -->
        <q-input outlined type="text" v-model="form.address" :label="$t('address') + '*'" lazy-rules
          :rules="rules.address" />
        <QuillEditor theme="snow" />
        <div class="q-pa-md q-gutter-sm">
          <q-editor v-model="editor" min-height="5rem" />

          <q-card flat bordered>
            <q-card-section>
              <pre style="white-space: pre-line">{{ editor }}</pre>
            </q-card-section>
          </q-card>

          <q-card flat bordered>
            <q-card-section />
          </q-card>
        </div>
        <q-btn class="full-width" color="primary" :label="$t('submit')" type="submit" :loading="loading" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { isEmail } from 'validator'
import Swal from 'sweetalert2'
import { useUserStore } from 'src/stores/user'
import dataEn from '../../address/data-en.js'
import dataZh from '../../address/data-zh.js'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const { locale } = useI18n({ useScope: 'global' })
const { t } = useI18n()

const user = useUserStore()
const editor = ref('What you see is <b>what</b> you get.')
const {
  name,
  gender,
  birth,
  tel,
  mobile,
  email,
  city,
  district,
  address,
  zipcode,
  isHelper
} = storeToRefs(user)

const role = ref(null)
const loading = ref(false)
const idxZip = reactive({
  city: '',
  district: ''
})

const form = reactive({
  name: name.value,
  avatar: '',
  gender: gender.value,
  birth: birth.value,
  tel: tel.value,
  mobile: mobile.value,
  email: email.value,
  city: city.value,
  district: district.value,
  address: address.value,
  zipcode: zipcode.value

})

const genderOptions = computed(() => {
  return [
    { label: t('male'), value: 'male' },
    { label: t('female'), value: 'female' },
    { label: t('rahter_not_say'), value: 'rahter_not_say' }
  ]
})

const options = computed(() => {
  return [
    { label: t('role_host'), value: 'role_host' },
    { label: t('role_helper'), value: 'role_helper' }
  ]
})

// 驗證規則(還沒翻譯)
const rules = reactive({
  email: [
    v => !!v || t('required'),
    v => isEmail(v) || '信箱格式錯誤'
  ],
  account: [
    v => !!v || t('required'),
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || t('required'),
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ],
  confirmPassword: [
    v => !!v || '請輸入確認密碼',
    v => v === form.password || '密碼不一致'
  ],
  name: [
    v => !!v || t('required'),
    v => (v.length >= 2 && v.length <= 15) || '名稱長度為 2 到 15 個字'
  ],
  tel: [
    v => v.length <= 10 || '含區碼長度為 9 或 10 個字，ex:02-1234-5678 或 03-1234-567'
  ],
  mobile: [
    v => !!v || t('required'),
    v => v.length === 10 || '請輸入10位手機'
  ],
  address: [
    v => !!v || t('required'),
    v => (v.length >= 5) || '請填寫正確詳細地址資訊'
  ],
  required: [
    v => !!v || t('required')
  ]
})
const cityOptions = computed(() => {
  if (locale.value === 'zh-TW') {
    return dataZh.counties
  } else {
    return dataEn.counties
  }
})

const districtOptions = computed(() => {
  if (locale.value === 'zh-TW' && form.city) {
    const idxZh = dataZh.counties.findIndex(v => {
      return v === form.city
    })
    return dataZh.districts[idxZh][0]
  } else if (locale.value === 'en-US' && form.city) {
    const idxEn = dataEn.counties.findIndex(v => {
      return v === form.city
    })
    return dataEn.districts[idxEn][0]
  } else {
    return null
  }
})

watch(() => locale.value, () => {
  if (locale.value === 'zh-TW') {
    // 改為中文時
    const idxCity = dataEn.counties.findIndex(v => v === form.city)
    if (idxCity > -1) {
      form.city = dataZh.counties[idxCity]
      const distList = dataEn.districts[idxCity][0]
      const idxDist = distList.findIndex(v => v === form.district)
      form.district = dataZh.districts[idxCity][0][idxDist]
    }
    // 改為英文時
  } else {
    const idxCity = dataZh.counties.findIndex(v => v === form.city)
    if (idxCity > -1) {
      form.city = dataEn.counties[idxCity]
      const distList = dataZh.districts[idxCity][0]
      const idxDist = distList.findIndex(v => v === form.district)
      form.district = dataEn.districts[idxCity][0][idxDist]
    }
  }
})

watch(() => form.city, () => {
  if (locale.value === 'zh-TW') {
    const idxCity = dataZh.counties.findIndex(v => v === form.city)
    if (idxCity > -1) {
      idxZip.city = idxCity
    }
  } else {
    const idxCity = dataEn.counties.findIndex(v => v === form.city)
    if (idxCity > -1) {
      idxZip.city = idxCity
    }
  }
})

watch(() => form.district, () => {
  if (locale.value === 'zh-TW') {
    const idxDist = dataZh.districts[idxZip.city][0].findIndex(v => v === form.district)
    if (idxDist > -1) {
      idxZip.district = idxDist
      form.zipcode = dataZh.districts[idxZip.city][1][idxDist]
    }
  } else {
    const idxDist = dataEn.districts[idxZip.city][0].findIndex(v => v === form.district)
    if (idxDist > -1) {
      idxZip.district = idxDist
      form.zipcode = dataZh.districts[idxZip.city][1][idxDist]
    }
  }
})

const submit = async () => {
  loading.value = true
  // 把地址存成中文
  if (locale.value === 'en-US') {
    form.city = dataZh.counties[idxZip.city]
    form.district = dataZh.districts[idxZip.city][0][idxZip.district]
  }
  // user.editUserInfo(form)
  // loading.value = false
}

</script>