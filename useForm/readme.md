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

## whit TypeScript

```typescript
//importamos nuestro hook y le indicamos el objeto inicial
const { form,onChange,email,password }=useForm({
        email: 'test@test.com',
        password: '123456',
    })

```
