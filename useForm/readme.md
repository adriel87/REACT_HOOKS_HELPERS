## ejemplo useForm

```javascript
const initialForm = {
  name='',
  edad=0,
  email='example@as.com'
  ...
}
const [formValues,handelInputChanges, reset] = useForm( initialForm )


```