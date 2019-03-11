<template>
    <Steps :current="2" direction="vertical" size="small">
        <Step title="已完成"></Step>
  <Alert closable>
        消息提示文案
        <template slot="desc"><Checkbox>完成确认</Checkbox>消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    <span slot="close"><Checkbox>完成确认</Checkbox></span>
    </Alert>
        <Step title="进行中"></Step>
        <Step title="待进行"></Step>
        <Step title="待进行"></Step>

    <Alert type="success">
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning">
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error">
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。<Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>
    </Steps>
</template>
<script>
    export default {
        
    }
</script>
