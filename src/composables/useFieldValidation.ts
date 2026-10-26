import { reactive } from 'vue'

/**
 * 表单字段校验（红框 + 字段下方红字样式配套使用）
 * 统一校验规则：姓名至少2个字符、手机号 11 位有效号码、邮箱格式
 */
export function useFieldValidation() {
  const errors = reactive<Record<string, string>>({})

  const rules: Record<string, (value: string) => string> = {
    name: (value) => {
      if (!value.trim()) return '请输入您的名字'
      if (value.trim().length < 2) return '名字至少需要2个字符'
      return ''
    },
    phone: (value) => {
      if (!value.trim()) return '请输入手机号码'
      if (!/^1[3-9]\d{9}$/.test(value.trim())) return '手机号格式不正确，请输入11位有效手机号'
      return ''
    },
    email: (value) => {
      if (!value.trim()) return '请输入邮箱地址'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return '邮箱格式不正确，请检查是否输入有误'
      return ''
    },
  }

  /** 校验单个字段，返回是否通过；错误信息存入 errors 供模板展示 */
  const validateField = (key: string, value: string): boolean => {
    errors[key] = rules[key] ? rules[key](value) : ''
    return !errors[key]
  }

  /** 输入时清除该字段的错误状态 */
  const clearError = (key: string) => {
    errors[key] = ''
  }

  /** 提交时校验一组字段，返回是否全部通过 */
  const validateAll = (values: Record<string, string>, keys: string[]): boolean => {
    let allValid = true
    keys.forEach((key) => {
      const valid = validateField(key, values[key] ?? '')
      if (!valid) allValid = false
    })
    return allValid
  }

  return { errors, validateField, clearError, validateAll }
}
