<div>
<h3>Edit Exercise Log</h3>
<form onSubmit={this.onSubmit}>
  <div className="form-group"> 
    <label>Número de ingressos: </label>
    <input  type="text"
        required
        className="form-control"
        value={this.state.username}
        onChange={this.onChangeUsername}
        />
  </div>
  <div className="form-group">
    <label>Sessão: </label>
    <input 
        type="text" 
        className="form-control"
        value={this.state.desc}
        onChange={this.onChangeDesc}
        />
  </div>
  <div className="form-group">
    <input type="submit" value="Editar ingresso" className="btn btn-primary" />
  </div>
</form>
</div>